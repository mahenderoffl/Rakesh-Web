import React, { useRef, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified, MdAccessTime } from 'react-icons/md';
import ShadowWrapper from './ShadowWrapper';

export default function CTASection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const phoneNumber = '6302541440';
  const whatsappMessage = encodeURIComponent(
    'Hi Mangya Footwear! I am interested in your premium footwear collection. Can you help me find the perfect pair?'
  );

  return (
    <section className="py-64 relative overflow-hidden bg-[#080808] border-t border-white/5">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="safe-container relative z-10 text-center flex flex-col items-center">
        <div ref={sectionRef} className="reveal max-w-4xl flex flex-col items-center">
          <h3 className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-10 block">
            The Final Step
          </h3>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-none tracking-tighter">
            READY TO <span className="text-gold-gradient">EVOLVE?</span>
          </h2>
          <div className="section-divider mb-12 w-32 h-[2px] bg-gold/30" />
          <p className="text-gray-400 text-lg md:text-2xl font-light mb-16 leading-relaxed max-w-3xl">
            Experience the pinnacle of footwear luxury. Our experts are ready to guide you 
            through our exclusive collections and find your perfect fit.
          </p>

          <ShadowWrapper className="w-full flex justify-center mb-20">
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-4xl px-4">
              <a href={`tel:${phoneNumber}`} className="shadow-btn flex-1 sm:flex-none sm:min-w-[280px]">
                <div className="shimmer" />
                <FaPhone size={16} />
                <span className="whitespace-nowrap">CALL DIRECTLY</span>
              </a>
              <a
                href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-btn shadow-btn-whatsapp flex-1 sm:flex-none sm:min-w-[280px]"
              >
                <div className="shimmer" />
                <FaWhatsapp size={20} />
                <span className="whitespace-nowrap">WHATSAPP US</span>
              </a>
            </div>
          </ShadowWrapper>

          {/* Unique Floating Trust Ribbon */}
          <div className="w-full max-w-5xl mx-auto mt-20">
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-transparent via-gold/30 to-transparent">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl rounded-3xl py-8 px-10 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/5">
                {[
                  { icon: <MdAccessTime size={24} />, label: "9:00 AM – 10:00 PM", sub: "DAILY SERVICE" },
                  { icon: <FaMapMarkerAlt size={22} />, label: "Beside Bus Stand", sub: "NARSAMPET, TS" },
                  { icon: <MdVerified size={24} />, label: "500+ Happy Clients", sub: "PREMIUM TRUST" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-black text-xs tracking-tight uppercase">{item.label}</p>
                      <p className="text-gold/40 text-[9px] font-black tracking-[0.2em] uppercase">{item.sub}</p>
                    </div>
                    {i < 2 && <div className="hidden md:block w-px h-10 bg-white/5 ml-8" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
