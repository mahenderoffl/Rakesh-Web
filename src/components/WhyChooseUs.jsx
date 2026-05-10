import React, { useRef, useEffect, useState } from 'react';
import { MdVerifiedUser, MdTrendingUp, MdFavoriteBorder, MdAttachMoney } from 'react-icons/md';

const REASONS = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Handpicked from globally renowned brands. Every pair is inspected for durability and superior craftsmanship.',
    icon: MdVerifiedUser,
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    id: 2,
    title: 'Affordable Prices',
    description: 'Luxury footwear at fair prices. Get the premium experience without stretching your budget.',
    icon: MdAttachMoney,
    color: '#C9A14A',
    gradient: 'from-amber-500/20 to-amber-500/5',
    glow: 'rgba(201,161,74,0.3)',
  },
  {
    id: 3,
    title: 'Latest Trends',
    description: 'Constantly updated with international fashion trends. Stay ahead of the style curve, always.',
    icon: MdTrendingUp,
    color: '#818CF8',
    gradient: 'from-indigo-500/20 to-indigo-500/5',
    glow: 'rgba(129,140,248,0.3)',
  },
  {
    id: 4,
    title: 'All-Day Comfort',
    description: 'Ergonomically designed for maximum comfort. Walk all day without compromise or fatigue.',
    icon: MdFavoriteBorder,
    color: '#F472B6',
    gradient: 'from-pink-500/20 to-pink-500/5',
    glow: 'rgba(244,114,182,0.3)',
  },
];

const STATS = [
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  { value: 7, suffix: '/7', label: 'Days Open' },
];

/* Animated counter hook */
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 1800, inView);

  return (
    <div
      className="reveal text-center group"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="inline-flex flex-col items-center px-6 py-5 rounded-2xl transition-all duration-400 hover:-translate-y-2 cursor-default"
        style={{ background: 'rgba(201,161,74,0.04)', border: '1px solid rgba(201,161,74,0.12)' }}
      >
        <p
          className="text-4xl sm:text-5xl font-black text-gold-gradient stat-number leading-none"
          aria-label={`${stat.value}${stat.suffix}`}
        >
          {inView ? count : 0}{stat.suffix}
        </p>
        <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
      </div>
    </div>
  );
}

function ReasonCard({ reason, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = reason.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal group"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="h-full p-7 rounded-2xl transition-all duration-500 cursor-default relative overflow-hidden"
        style={{
          background: 'rgba(20,20,20,0.8)',
          border: `1px solid ${reason.color}20`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `1px solid ${reason.color}50`;
          e.currentTarget.style.boxShadow = `0 20px 50px ${reason.glow}20, 0 0 0 1px ${reason.color}15`;
          e.currentTarget.style.transform = 'translateY(-8px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = `1px solid ${reason.color}20`;
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* BG gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `${reason.color}18`, border: `1px solid ${reason.color}30` }}
          >
            <IconComponent size={26} style={{ color: reason.color }} />
          </div>

          {/* Number */}
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: `${reason.color}80` }}
          >
            0{reason.id}
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-white mb-3 group-hover:text-white transition-colors">
            {reason.title}
          </h3>

          {/* Desc */}
          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
            {reason.description}
          </p>

          {/* Bottom accent */}
          <div
            className="mt-5 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
            style={{ background: `linear-gradient(90deg, ${reason.color}, transparent)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsInView(true); e.target.classList.add('visible'); } },
      { threshold: 0.3 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.2 }
    );

    if (statsRef.current) obs1.observe(statsRef.current);
    if (headerRef.current) obs2.observe(headerRef.current);

    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section id="why-us" className="py-32 relative overflow-hidden" style={{ background: '#0c0c0c' }}>
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse, rgba(201,161,74,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-24 flex flex-col items-center">
          <h3 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8"
            style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
          >
            Our Promise
          </h3>
          <h2 className="font-black text-white mb-8 tracking-tighter leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Why Choose <span className="text-gold-gradient">Mangya</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30 mx-auto" />
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Excellence in every detail. Discover the premium difference you can feel with every single 
            step you take in our curated footwear.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {REASONS.map((r, i) => <ReasonCard key={r.id} reason={r} index={i} />)}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => <StatCard key={s.label} stat={s} index={i} inView={statsInView} />)}
        </div>
      </div>
    </section>
  );
}
