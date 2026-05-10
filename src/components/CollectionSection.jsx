import React, { useRef, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { useCardTilt } from '../hooks/useCardTilt';

const COLLECTIONS = [
  {
    id: 'men',
    name: "Men's",
    tagline: 'Bold & Sophisticated',
    description: 'Premium collection of leather oxfords, casual sneakers, and formal footwear crafted for the modern gentleman.',
    image: '/mens_shoe.png',
    badge: '🎩 Gentleman',
    gradient: 'from-blue-900/60 via-indigo-900/40 to-[#0F0F0F]',
    accent: '#4F7FD5',
    count: '50+ Styles',
  },
  {
    id: 'women',
    name: "Women's",
    tagline: 'Elegant & Trendy',
    description: 'Walk with confidence. Timeless heels, chic flats, and fashion-forward sneakers for every occasion.',
    image: '/womens_shoe.png',
    badge: '👑 Queen',
    gradient: 'from-rose-900/60 via-pink-900/40 to-[#0F0F0F]',
    accent: '#D56B8A',
    count: '60+ Styles',
  },
  {
    id: 'kids',
    name: "Kids'",
    tagline: 'Fun & Comfortable',
    description: 'Colorful, durable designs for little feet. Built for play, designed for style — made to keep up.',
    image: '/kids_shoe.png',
    badge: '⭐ Tiny Tots',
    gradient: 'from-violet-900/60 via-purple-900/40 to-[#0F0F0F]',
    accent: '#9B6DD5',
    count: '40+ Styles',
  },
];

function CollectionCard({ col, index }) {
  const { cardRef, shineRef } = useCardTilt(10);
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (revealRef.current) observer.observe(revealRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        ref={cardRef}
        className="card-3d relative h-[540px] rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: '#141414',
          border: `1px solid rgba(${col.accent === '#4F7FD5' ? '79,127,213' : col.accent === '#D56B8A' ? '213,107,138' : '155,109,213'},0.2)`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Shine overlay */}
        <div ref={shineRef} className="card-3d-shine" />

        {/* Gradient bg */}
        <div className={`absolute inset-0 bg-gradient-to-b ${col.gradient} z-0`} />

        {/* Top mesh pattern */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, ${col.accent}22 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Shoe image */}
        <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
          <img
            src={col.image}
            alt={col.name}
            className="w-4/5 h-4/5 object-contain transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4"
            style={{
              filter: `drop-shadow(0 20px 40px ${col.accent}44)`,
            }}
          />
        </div>

        {/* Top Badge */}
        <div className="absolute top-5 right-5 z-20">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: `${col.accent}22`,
              border: `1px solid ${col.accent}44`,
              color: col.accent,
            }}
          >
            {col.badge}
          </span>
        </div>

        {/* Count badge */}
        <div
          className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-full text-xs font-bold text-white"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {col.count}
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          {/* Blur background for readability */}
          <div
            className="absolute inset-0 rounded-b-2xl"
            style={{
              background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 60%, transparent 100%)',
            }}
          />

          <div className="relative z-10">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-1 transition-all duration-300"
              style={{ color: col.accent }}
            >
              {col.tagline}
            </p>
            <h3 className="text-3xl font-black text-white mb-2">{col.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 max-h-0 group-hover:max-h-24 overflow-hidden">
              {col.description}
            </p>
            <div
              className="mt-4 flex items-center gap-2 font-bold text-sm transition-all duration-300"
              style={{ color: col.accent }}
            >
              <span>Explore Now</span>
              <HiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Hover glow rim */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 40px ${col.accent}15, 0 0 40px ${col.accent}15`,
            border: `1px solid ${col.accent}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function CollectionSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" className="py-32 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      {/* Section ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,161,74,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-24 flex flex-col items-center">
          <h3 className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8"
            style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
          >
            <MdVerified size={14} />
            Curated Collections
          </h3>
          <h2 className="font-black text-white mb-8 tracking-tighter leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Shop by{' '}
            <span className="text-gold-gradient">Category</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Premium selections for every lifestyle — crafted with care, worn with pride. 
            Discover the perfect pair for your daily journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((col, i) => (
            <CollectionCard key={col.id} col={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
