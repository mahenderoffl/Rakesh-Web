import React, { useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified, MdDirections } from 'react-icons/md';

const STORE_DETAILS = [
  {
    icon: FaMapMarkerAlt,
    title: 'Our Location',
    main: 'Beside Bus Stand, Narsampet',
    sub: 'Warangal District, Telangana',
    color: '#C9A14A',
    action: {
      href: 'https://maps.google.com/?q=Narsampet+Bus+Stand+Telangana',
      label: 'Get Directions',
      icon: MdDirections,
    },
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    main: '+91 63025 41440',
    sub: 'Available 9 AM – 10 PM',
    color: '#10B981',
    action: {
      href: 'tel:6302541440',
      label: 'Call Now',
      icon: FaPhone,
    },
  },
  {
    icon: FaClock,
    title: 'Store Hours',
    main: '9:00 AM – 10:00 PM',
    sub: 'Open 7 Days a Week',
    color: '#818CF8',
    action: {
      href: 'https://wa.me/916302541440',
      label: 'WhatsApp',
      icon: FaWhatsapp,
    },
  },
];

function StoreCard({ detail, index }) {
  const cardRef = useRef(null);
  const IconComponent = detail.icon;
  const ActionIcon = detail.action.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="group p-6 rounded-2xl transition-all duration-400 cursor-default h-full"
        style={{
          background: 'rgba(20,20,20,0.8)',
          border: `1px solid ${detail.color}20`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = `1px solid ${detail.color}50`;
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = `0 20px 50px ${detail.color}15`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = `1px solid ${detail.color}20`;
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${detail.color}15`,
              border: `1px solid ${detail.color}30`,
            }}
          >
            <IconComponent size={22} style={{ color: detail.color }} />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">{detail.title}</p>
            <p className="text-white font-bold text-base leading-tight mb-0.5 truncate">{detail.main}</p>
            <p className="text-gray-500 text-xs">{detail.sub}</p>
          </div>
        </div>

        {/* Action */}
        <a
          href={detail.action.href}
          target={detail.action.href.startsWith('http') ? '_blank' : undefined}
          rel={detail.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="mt-5 flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
          style={{ color: detail.color }}
        >
          <ActionIcon size={14} />
          {detail.action.label}
          <HiArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

export default function StoreInfo() {
  const headerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    [headerRef, mapRef].forEach((r) => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="store" className="py-48 relative overflow-hidden" style={{ background: '#0F0F0F' }}>
      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.06) 0%, transparent 70%)' }}
      />

      <div className="safe-container">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-24 flex flex-col items-center">
          <h3 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8"
            style={{ background: 'rgba(201,161,74,0.08)', border: '1px solid rgba(201,161,74,0.25)', color: '#C9A14A' }}
          >
            <MdVerified size={14} />
            Find Us
          </h3>
          <h2 className="font-black text-white mb-8 tracking-tighter leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            Visit Our <span className="text-gold-gradient">Store</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30 mx-auto" />
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Come experience our premium footwear collection in person at our flagship Narsampet 
            location. Our experts are ready to help you find your perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Details */}
          <div className="space-y-5">
            {STORE_DETAILS.map((d, i) => <StoreCard key={d.title} detail={d} index={i} />)}

            {/* Phone Prominent Display */}
            <div
              className="reveal p-6 rounded-2xl text-center"
              style={{ background: 'linear-gradient(135deg, rgba(201,161,74,0.12), rgba(201,161,74,0.04))', border: '1px solid rgba(201,161,74,0.3)' }}
            >
              <p className="text-gray-400 text-sm mb-2">Ready to order? Call us now:</p>
              <a
                href="tel:6302541440"
                className="text-3xl sm:text-4xl font-black text-gold-gradient hover:scale-105 inline-block transition-transform duration-300"
              >
                63025 41440
              </a>
              <p className="text-gray-500 text-xs mt-2">Tap to call directly</p>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div ref={mapRef} className="reveal-right">
            <div
              className="relative rounded-2xl overflow-hidden h-[480px] border"
              style={{ border: '1px solid rgba(201,161,74,0.2)', background: '#141414' }}
            >
              {/* Premium store visual */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #141414 0%, #1a1a1a 50%, #141414 100%)',
                }}
              />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(201,161,74,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,161,74,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                {/* Map pin animation */}
                <div className="relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center animate-pulsGlow"
                    style={{ background: 'rgba(201,161,74,0.15)', border: '2px solid rgba(201,161,74,0.4)' }}
                  >
                    <FaMapMarkerAlt size={32} style={{ color: '#C9A14A' }} />
                  </div>
                  {/* Ping rings */}
                  <div
                    className="absolute inset-0 rounded-full border border-[rgba(201,161,74,0.3)] animate-ping"
                    style={{ animationDuration: '2s' }}
                  />
                  <div
                    className="absolute -inset-3 rounded-full border border-[rgba(201,161,74,0.15)] animate-ping"
                    style={{ animationDuration: '2s', animationDelay: '0.5s' }}
                  />
                </div>

                <div className="text-center px-6">
                  <p className="text-white font-black text-xl mb-1">Mangya Footwear</p>
                  <p className="text-[#C9A14A] font-semibold text-sm mb-1">Beside Bus Stand</p>
                  <p className="text-gray-500 text-sm">Narsampet, Warangal District</p>
                  <p className="text-gray-500 text-sm">Telangana, India</p>
                </div>

                <a
                  href="https://maps.google.com/?q=Narsampet+Bus+Stand+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="btn-primary flex items-center gap-2 px-6 py-3 text-sm"
                >
                  <MdDirections size={18} />
                  Open in Google Maps
                </a>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[rgba(201,161,74,0.4)] rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[rgba(201,161,74,0.4)] rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[rgba(201,161,74,0.4)] rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[rgba(201,161,74,0.4)] rounded-br-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
