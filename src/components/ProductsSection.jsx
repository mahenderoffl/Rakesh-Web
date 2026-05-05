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

function ProductCard({ product, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const whatsappMsg = encodeURIComponent(
    `Hi Mangya Footwear! I am interested in "${product.name}" (${product.category}). Can you tell me more?`
  );

  return (
    <div
      ref={cardRef}
      className="reveal product-card"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image area */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl" style={{ background: '#1a1a1a' }}>
        {/* Badge */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-black"
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
          className="w-full h-full object-contain p-6 transition-transform duration-700"
          style={{ filter: `drop-shadow(0 10px 30px ${product.badgeColor}33)` }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-4">
          <a
            href={`https://wa.me/916302541440?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#0F0F0F] transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #C9A14A, #E8C547)' }}
          >
            <FaWhatsapp size={16} />
            Enquire Now
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-gray-500 font-semibold tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="text-white font-black text-lg mb-2">{product.name}</h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className="text-xs"
              style={{ color: i < product.stars ? '#C9A14A' : '#333' }}
            >
              ★
            </span>
          ))}
          <span className="text-gray-500 text-xs ml-1">({product.stars}.0)</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#C9A14A] font-black text-xl">{product.price}</span>
          <a
            href={`https://wa.me/916302541440?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-bold text-[#C9A14A] hover:text-white transition-colors duration-300"
          >
            Ask Price
            <HiArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
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
    <section id="products" className="py-32 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
            >
              Featured Items
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Top{' '}
              <span className="text-gold-gradient">Picks</span>
            </h2>
            <p className="text-gray-400 text-base mt-2 font-light max-w-md">
              Our handpicked selection of premium footwear — ask us for the best price.
            </p>
          </div>
          <a
            href="https://wa.me/916302541440?text=Hi%20Mangya!%20I%20want%20to%20see%20your%20full%20collection."
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-btn"
            className="btn-outline flex items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
          >
            <span>View All</span>
            <HiArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Can't find what you're looking for?{' '}
            <a
              href="https://wa.me/916302541440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A14A] font-semibold hover:underline"
            >
              Chat with us on WhatsApp
            </a>{' '}
            and we'll help you find the perfect pair.
          </p>
        </div>
      </div>
    </section>
  );
}
