import { useEffect, useRef } from 'react';

/**
 * Hook for 3D card tilt effect on mouse move.
 * @param {number} intensity - Tilt intensity (default 15)
 */
export function useCardTilt(intensity = 15) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    if (!card) return;

    let targetRotX = 0, targetRotY = 0;
    let currentRotX = 0, currentRotY = 0;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = e.clientX - cx;
      const my = e.clientY - cy;
      targetRotX = (-my / (rect.height / 2)) * intensity;
      targetRotY = (mx / (rect.width / 2)) * intensity;

      if (shine) {
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.12), transparent 60%)`;
        shine.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
      if (shine) shine.style.opacity = '0';
    };

    const animate = () => {
      currentRotX += (targetRotX - currentRotX) * 0.1;
      currentRotY += (targetRotY - currentRotY) * 0.1;
      card.style.transform = `perspective(1000px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg) scale3d(1.02, 1.02, 1.02)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return { cardRef, shineRef };
}
