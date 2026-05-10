import React from 'react';
import { useCardTilt } from '../hooks/useCardTilt';

const ShowcaseCard = ({ image, name, price, index, onClick }) => {
  const tiltRef = useCardTilt();

  return (
    <div 
      ref={tiltRef}
      onClick={() => onClick({ image, name, price })}
      className={`reveal-scale visible group relative product-card p-4 transition-all duration-700 delay-${(index + 1) * 100} cursor-pointer`}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#1A1A1A]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             View Details
           </div>
        </div>
        
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gold/90 text-dark font-bold rounded-full text-xs tracking-wider uppercase animate-pulse">
            New Arrival
          </span>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-end">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest font-medium">Limited Edition</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-gold-gradient block">
            ₹{price}
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Plus Shipping</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/30 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 -z-10" />
    </div>
  );
};

const PremiumShowcase = ({ onProductClick }) => {
  const newProducts = [
    {
      id: 1,
      image: "/image.png",
      name: "Mangya Signature Rose",
      price: "330"
    },
    {
      id: 2,
      image: "/image_copy.png",
      name: "Mangya Classic Pink",
      price: "320"
    }
  ];

  return (
    <section className="py-40 bg-[#0A0A0A] w-full relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="safe-container relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <h3 className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block animate-fadeInUp">
            Exclusive Collection
          </h3>
          <h2 className="text-4xl md:text-7xl font-black mb-8 animate-fadeInUp leading-none tracking-tighter">
            <span className="text-white">PREMIUM</span> <br />
            <span className="text-gold-gradient">NEW ARRIVALS</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30 mx-auto" />
          <p className="text-gray-400 max-w-2xl text-center text-lg md:text-xl font-light leading-relaxed">
            Experience the pinnacle of footwear comfort and style with our latest additions. 
            Handpicked for the modern woman who values both aesthetics and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {newProducts.map((product, index) => (
            <ShowcaseCard key={product.id} {...product} index={index} onClick={onProductClick} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic mb-8">"Style is a way to say who you are without having to speak."</p>
          <div className="flex justify-center gap-6">
             <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-2">
                   <span className="text-gold text-xl font-bold">1k+</span>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Happy Customers</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-2">
                   <span className="text-gold text-xl font-bold">5★</span>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Top Rated</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;
