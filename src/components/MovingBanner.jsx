import React from 'react';

const MovingBanner = () => {
  const items = [
    "PREMIUM QUALITY",
    "LUXURY COMFORT",
    "HANDCRAFTED DESIGN",
    "TRENDING NOW",
    "MANGYA EXCLUSIVE",
    "DURABLE & STYLISH",
    "PERFECT FIT",
    "STEP INTO STYLE"
  ];

  return (
    <div className="py-6 bg-gradient-to-r from-gold-dark/20 via-gold/10 to-gold-dark/20 overflow-hidden border-y border-gold/10 backdrop-blur-sm relative z-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-2xl md:text-4xl font-black text-transparent stroke-gold-light/40" style={{ WebkitTextStroke: '1px rgba(201, 161, 74, 0.4)' }}>
              {item}
            </span>
            <div className="w-3 h-3 rounded-full bg-gold mx-8 shadow-[0_0_10px_rgba(201,161,74,0.5)]"></div>
          </div>
        ))}
      </div>
      
      {/* Reverse Marquee for depth */}
      <div className="flex animate-marquee-reverse whitespace-nowrap mt-4 opacity-50">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-xl md:text-2xl font-bold text-gold/30 italic">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-gold/20 mx-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingBanner;
