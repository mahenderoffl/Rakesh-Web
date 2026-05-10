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
    <div className="py-10 bg-black/40 border-y border-white/5 backdrop-blur-xl relative z-20 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center px-12">
            <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold/40 via-gold to-gold/40 tracking-tighter">
              {item}
            </span>
            <div className="mx-12 w-2 h-2 rounded-full bg-gold/30 shadow-[0_0_20px_rgba(201,161,74,0.5)]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingBanner;
