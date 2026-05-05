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
  const heroImgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Staggered mount animation
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax on shoe image
  useEffect(() => {
    const handleScroll = () => {
      if (!heroImgRef.current) return;
      const y = window.scrollY;
      heroImgRef.current.style.transform = `translateY(${y * 0.15}px) rotate(${y * 0.02}deg)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '6302541440';
  const whatsappMsg = encodeURIComponent(
    'Hi Mangya Footwear! I want to know more about your premium collection.'
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-bg-grid"
      style={{ background: '#0F0F0F' }}
    >
      {/* Particle BG */}
      <ParticleCanvas />

      {/* Ambient Orbs */}
      <Orb
        className="w-[600px] h-[600px] animate-pulse"
        style={{
          top: '-15%', right: '-10%',
          background: 'radial-gradient(circle, rgba(201,161,74,0.12) 0%, transparent 70%)',
          animationDuration: '8s',
        }}
      />
      <Orb
        className="w-[400px] h-[400px]"
        style={{
          bottom: '-10%', left: '-8%',
          background: 'radial-gradient(circle, rgba(201,161,74,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(135deg, transparent 45%, rgba(201,161,74,0.03) 45%, rgba(201,161,74,0.03) 55%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: '100ms',
                background: 'rgba(201,161,74,0.1)',
                border: '1px solid rgba(201,161,74,0.35)',
                color: '#C9A14A',
              }}
            >
              <MdVerified size={14} />
              Luxury Footwear Destination
            </div>

            {/* Headline */}
            <h1
              className={`transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block text-white font-black leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                Step Into
              </span>
              <span
                className="block font-black leading-none text-gold-gradient"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: "'Playfair Display', serif" }}
              >
                Premium
              </span>
              <span className="block text-white font-black leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                Style
              </span>
            </h1>

            {/* Sub */}
            <p
              className={`text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed font-light transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              Discover trend-forward footwear for{' '}
              <span className="text-[#C9A14A] font-semibold">Men, Women & Kids</span>{' '}
              in Narsampet. Quality meets luxury at every step.
            </p>

            {/* Divider */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, #C9A14A, transparent)' }} />
              <span className="text-[#C9A14A] text-xs font-bold tracking-widest uppercase">Narsampet's Finest</span>
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, #C9A14A)' }} />
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <a
                href="#collection"
                id="hero-explore-btn"
                className="btn-primary flex items-center gap-3 px-8 py-4 text-base group"
              >
                <span>Explore Collection</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="https://wa.me/916302541440"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="btn-outline flex items-center gap-3 px-8 py-4 text-base group"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap gap-6 pt-2 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              {[
                { icon: '⭐', text: '500+ Happy Customers' },
                { icon: '🏆', text: 'Premium Quality' },
                { icon: '📍', text: 'Beside Bus Stand' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="text-sm">{b.icon}</span>
                  <span className="text-gray-400 text-sm font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Image ── */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full max-w-[560px]">
              {/* Rotating ring */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[rgba(201,161,74,0.2)] animate-rotateSlow"
                style={{ transform: 'scale(1.15)' }}
              />
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[rgba(201,161,74,0.1)] animate-rotateSlow"
                style={{ transform: 'scale(1.3)', animationDirection: 'reverse', animationDuration: '30s' }}
              />

              {/* Glow halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(201,161,74,0.15) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Main shoe image */}
              <div
                ref={heroImgRef}
                className="relative z-10 animate-floatYSlow"
                style={{ willChange: 'transform' }}
              >
                <img
                  src="/hero_shoe.png"
                  alt="Premium footwear"
                  className="w-full object-contain drop-shadow-[0_30px_60px_rgba(201,161,74,0.3)]"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(201,161,74,0.2))' }}
                />
              </div>

              {/* Floating info cards */}
              <div
                className="absolute top-6 -left-8 glass-gold px-4 py-3 rounded-2xl z-20"
                style={{ animation: 'floatY 4s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                <p className="text-[#C9A14A] font-black text-sm">Premium</p>
                <p className="text-white text-xs">Quality Guaranteed</p>
              </div>

              <div
                className="absolute bottom-20 -right-8 glass-gold px-4 py-3 rounded-2xl z-20"
                style={{ animation: 'floatY 4s ease-in-out infinite', animationDelay: '1.5s' }}
              >
                <p className="text-[#C9A14A] font-black text-sm">500+</p>
                <p className="text-white text-xs">Happy Customers</p>
              </div>

              <div
                className="absolute bottom-4 left-4 glass-gold px-4 py-3 rounded-2xl z-20"
                style={{ animation: 'floatY 4s ease-in-out infinite', animationDelay: '1s' }}
              >
                <p className="text-[#C9A14A] font-black text-sm">📍 Narsampet</p>
                <p className="text-white text-xs">Beside Bus Stand</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll Indicator ── */}
        <div className="flex flex-col items-center gap-2 mt-16">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll to Explore</span>
          <div className="scroll-indicator flex flex-col items-center gap-1">
            <div className="w-px h-12 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  height: '40%',
                  background: 'linear-gradient(180deg, #C9A14A, transparent)',
                  animation: 'scanLine 1.5s ease-in-out infinite',
                }}
              />
              <div className="absolute inset-0 bg-[rgba(201,161,74,0.15)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
