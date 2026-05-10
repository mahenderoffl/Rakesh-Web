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

      <div className="relative z-10 safe-container pt-64 lg:pt-48 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-700 mx-auto lg:mx-0 mb-4 lg:mb-0 ${
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
              <span className="block text-white font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
                Elevate
              </span>
              <span
                className="block font-black leading-none text-gold-gradient py-3 lg:py-4"
                style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontFamily: "'Playfair Display', serif" }}
              >
                Every Step
              </span>
              <span className="block text-white/50 font-light leading-none tracking-tighter" style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)' }}>
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
              className={`flex flex-row justify-center lg:justify-start gap-4 sm:gap-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a
                href="#collection"
                className="btn-primary flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-sm font-black uppercase tracking-widest group shadow-[0_20px_50px_rgba(201,161,74,0.2)] flex-1 sm:flex-none justify-center"
              >
                <span className="whitespace-nowrap">Browse Elite</span>
                <HiArrowRight className="group-hover:translate-x-2 transition-transform duration-300 hidden sm:block" />
              </a>
              <a
                href={`https://wa.me/91${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-sm font-black uppercase tracking-widest flex-1 sm:flex-none justify-center"
              >
                <FaWhatsapp size={16} />
                <span className="whitespace-nowrap">Contact</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Hero Carousel ── */}
          <div
            className={`relative flex justify-center items-center transition-all duration-1000 h-[500px] lg:h-[600px] ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Background ambient light */}
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-[120px] animate-pulsGlow opacity-40" />
              
              {/* Carousel Content */}
              {HERO_IMAGES.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                    activeSlide === idx ? 'opacity-100 scale-110 rotate-0 translate-y-0' : 'opacity-0 scale-75 rotate-12 translate-y-20 pointer-events-none'
                  }`}
                >
                  <div className="relative group">
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full max-h-[400px] lg:max-h-[500px] object-contain drop-shadow-[0_20px_60px_rgba(201,161,74,0.6)] transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Perspective shadow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-gold/20 blur-3xl rounded-full" />
                  </div>
                  
                  <div className="mt-12 text-center">
                     <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl">{img.title}</h3>
                     <p className="text-gold font-bold text-xs lg:text-sm tracking-[0.5em] uppercase">{img.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <div className="absolute -bottom-6 flex gap-4">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeSlide === idx ? 'bg-gold w-16 shadow-[0_0_20px_rgba(201,161,74,1)]' : 'bg-white/10 w-8 hover:bg-white/30'
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
