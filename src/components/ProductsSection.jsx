import React, { useRef, useEffect } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const PRODUCTS = [
  {
    id: 1,
    name: 'Elite Leather Oxford',
    category: "Men's Formal",
    price: '₹1,499',
    image: '/mens_shoe.png',
    badge: 'Bestseller',
    badgeColor: '#C9A14A',
    stars: 5,
  },
  {
    id: 2,
    name: 'Rose Gold Stiletto',
    category: "Women's Heels",
    price: '₹1,299',
    image: '/womens_shoe.png',
    badge: 'New Arrival',
    badgeColor: '#F472B6',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sporty Flex Runner',
    category: "Kids' Sport",
    price: '₹799',
    image: '/kids_shoe.png',
    badge: 'Hot Pick',
    badgeColor: '#818CF8',
    stars: 4,
  },
  {
    id: 4,
    name: 'Premium Collection',
    category: 'All Categories',
    price: 'Visit Store',
    image: '/collection_shoes.png',
    badge: 'Exclusive',
    badgeColor: '#10B981',
    stars: 5,
  },
];

function ProductCard({ product, index, onClick }) {
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
      onClick={() => onClick(product)}
      className="reveal product-card cursor-pointer group"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image area */}
      <div className="relative h-72 flex items-center justify-center bg-[#1a1a1a] rounded-t-2xl px-4 py-8">
        {/* Badge */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
          style={{
            background: `${product.badgeColor}22`,
            border: `1px solid ${product.badgeColor}50`,
            color: product.badgeColor,
          }}
        >
          {product.badge}
        </div>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             Quick View
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-[#141414] rounded-b-2xl">
        <p className="text-[10px] text-gold/60 font-bold tracking-[0.2em] uppercase mb-2">{product.category}</p>
        <h3 className="text-white font-bold text-lg mb-2 truncate group-hover:text-gold transition-colors">{product.name}</h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="text-[10px]"
              style={{ color: i < product.stars ? '#C9A14A' : '#333' }}
            >
              ★
            </span>
          ))}
          <span className="text-gray-500 text-[10px] ml-2 tracking-widest">({product.stars}.0)</span>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-gold font-black text-xl">{product.price}</span>
          <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
            <HiArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection({ onProductClick }) {
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
    <section id="products" className="py-32 w-full relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-24 flex flex-col items-center">
          <h3 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8"
            style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
          >
            Curated Selection
          </h3>
          <h2 className="font-black text-white mb-8 tracking-tighter leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            THE <span className="text-gold-gradient">TOP PICKS</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30" />
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Discover our handpicked premium footwear collection. Precision-crafted for those who demand excellence 
            in every single step they take.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} index={i} onClick={onProductClick} />)}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-20 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            Looking for something specific?{' '}
            <a
              href="https://wa.me/916302541440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-bold hover:underline underline-offset-4"
            >
              Consult our experts on WhatsApp
            </a>
          </p>
          <div className="mt-8 flex justify-center">
             <a
              href="https://wa.me/916302541440"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-10 py-4 text-xs font-black uppercase tracking-widest"
            >
              <span>View Full Catalog</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
