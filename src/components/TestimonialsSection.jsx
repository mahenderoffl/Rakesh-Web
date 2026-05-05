import React, { useRef, useEffect, useState } from 'react';
import { MdFormatQuote } from 'react-icons/md';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    location: 'Narsampet',
    rating: 5,
    text: 'Amazing quality shoes at a very reasonable price! The staff is so helpful and knowledgeable. Found the perfect pair for my wedding here.',
    avatar: 'RS',
    color: '#4F7FD5',
  },
  {
    id: 2,
    name: 'Priya Reddy',
    location: 'Warangal',
    rating: 5,
    text: 'The women\'s collection is absolutely stunning! Got 3 pairs and all of them are incredibly comfortable. Will definitely come back for more.',
    avatar: 'PR',
    color: '#D56B8A',
  },
  {
    id: 3,
    name: 'Suresh Kumar',
    location: 'Narsampet',
    rating: 5,
    text: 'Best footwear store in Narsampet without a doubt. Beside bus stand — very convenient location. The premium section is top-class!',
    avatar: 'SK',
    color: '#C9A14A',
  },
  {
    id: 4,
    name: 'Anjali Patel',
    location: 'Mulugu',
    rating: 5,
    text: 'Bought sports shoes for my kids and they absolutely love them! Very durable and stylish. Great value for money. Highly recommend Mangya!',
    avatar: 'AP',
    color: '#10B981',
  },
];

function TestimonialCard({ t, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal testimonial-card p-6 flex flex-col gap-4"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Quote icon */}
      <div className="text-[#C9A14A] opacity-40">
        <MdFormatQuote size={36} className="scale-x-[-1]" />
      </div>

      {/* Text */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">
        "{t.text}"
      </p>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-[#C9A14A] text-sm">★</span>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-[rgba(201,161,74,0.1)]">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}60, ${t.color}30)`, border: `1px solid ${t.color}40` }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white font-bold text-sm">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.location}</p>
        </div>
        <div className="ml-auto">
          <div
            className="px-2 py-0.5 rounded-full text-[10px] font-bold"
            style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}
          >
            Verified
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" style={{ background: '#0c0c0c' }}>
      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,161,74,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
          >
            Customer Love
          </div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            What Our{' '}
            <span className="text-gold-gradient">Customers Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Real reviews from happy customers across Narsampet and beyond.
          </p>
          <div className="section-divider mt-8" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Rating summary */}
        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-5xl font-black text-gold-gradient">4.9</p>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-[#C9A14A] text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 hidden sm:block" style={{ background: 'rgba(201,161,74,0.2)' }} />
          <div className="text-center">
            <p className="text-5xl font-black text-gold-gradient">500+</p>
            <p className="text-gray-500 text-xs mt-2">Happy Customers</p>
          </div>
          <div className="w-px h-12 hidden sm:block" style={{ background: 'rgba(201,161,74,0.2)' }} />
          <div className="text-center">
            <p className="text-5xl font-black text-gold-gradient">100%</p>
            <p className="text-gray-500 text-xs mt-2">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
