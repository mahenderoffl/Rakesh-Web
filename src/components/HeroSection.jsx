import React, { useEffect, useRef, useState } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';

/* ── Particle Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random(),
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,161,74,${p.o * 0.6})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        p.o = Math.abs(Math.sin(Date.now() * 0.001 + p.x));
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/* ── Floating Orb ── */
function Orb({ style, className }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={style}
    />
  );
}

/* ── Main Hero ── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  
  const HERO_IMAGES = [
    { url: '/hero_shoe.png', title: 'Luxury Formal', subtitle: 'Oxford Collection' },
    { url: '/womens_shoe.png', title: 'Elegant Grace', subtitle: 'Stiletto Series' },
    { url: '/kids_shoe.png', title: 'Active Play', subtitle: 'Junior Runners' },
    { url: '/collection_shoes.png', title: 'All Classics', subtitle: 'Premium Selection' },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = '6302541440';

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full bg-[#0F0F0F]"
    >
      <ParticleCanvas />

      <Orb
        className="w-[800px] h-[800px] animate-pulse"
        style={{
          top: '-20%', right: '-15%',
          background: 'radial-gradient(circle, rgba(201,161,74,0.1) 0%, transparent 70%)',
          animationDuration: '10s',
        }}
      />
      <Orb
        className="w-[600px] h-[600px]"
        style={{
          bottom: '-15%', left: '-10%',
          background: 'radial-gradient(circle, rgba(201,161,74,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-700 mx-auto lg:mx-0 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                background: 'rgba(201,161,74,0.08)',
                border: '1px solid rgba(201,161,74,0.25)',
                color: '#C9A14A',
              }}
            >
              <MdVerified size={14} />
              Narsampet's Elite Choice
            </div>

            <h1
              className={`transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block text-white font-black leading-none" style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
                Elevate
              </span>
              <span
                className="block font-black leading-none text-gold-gradient py-4"
                style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontFamily: "'Playfair Display', serif" }}
              >
                Every Step
              </span>
              <span className="block text-white/50 font-light leading-none tracking-tighter" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                With Luxury.
              </span>
            </h1>

            <p
              className={`text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              Discover the fusion of <span className="text-white font-bold">Premium Quality</span> and 
              <span className="text-gold font-bold"> Unmatched Comfort</span>. Your ultimate destination for 
              elite footwear in Narsampet.
            </p>

            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a
                href="#collection"
                className="btn-primary flex items-center gap-4 px-10 py-5 text-sm font-black uppercase tracking-widest group shadow-[0_20px_50px_rgba(201,161,74,0.2)]"
              >
                <span>Browse Elite</span>
                <HiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-4 px-10 py-5 text-sm font-black uppercase tracking-widest"
              >
                <FaWhatsapp size={20} />
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div
            className={`relative flex justify-center items-center transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gold/5 rounded-full blur-[100px] animate-pulsGlow" />
              <div className="absolute inset-0 border border-gold/10 rounded-full animate-rotateSlow" style={{ transform: 'scale(1.2)' }} />
              
              {HERO_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${
                    activeSlide === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-[85%] object-contain drop-shadow-[0_40px_80px_rgba(201,161,74,0.4)]"
                  />
                  <div className="mt-8 text-center bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                     <p className="text-gold font-black text-lg tracking-widest uppercase">{img.title}</p>
                     <p className="text-white/60 text-xs tracking-tighter uppercase">{img.subtitle}</p>
                  </div>
                </div>
              ))}

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-12 h-1.5 rounded-full transition-all duration-500 ${
                      activeSlide === idx ? 'bg-gold w-20' : 'bg-white/10 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 mt-24">
          <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase">Scroll to Explore</span>
          <div className="scroll-indicator flex flex-col items-center gap-1">
            <div className="w-px h-12 relative overflow-hidden bg-white/10">
              <div
                className="absolute top-0 left-0 w-full bg-gold"
                style={{
                  height: '40%',
                  animation: 'scanLine 1.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
