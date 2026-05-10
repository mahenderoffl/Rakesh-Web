import React, { useRef, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';

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
    <section className="py-40 relative overflow-hidden bg-[#0A0A0A] border-t border-white/5">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="safe-container relative z-10 text-center">
        <div ref={sectionRef} className="reveal max-w-3xl mx-auto">
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Ready to Step Up?</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            UPGRADE YOUR <br />
            <span className="text-gold-gradient">FOOTWEAR STYLE</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
            Experience the pinnacle of footwear luxury. Consult our experts for personalized sizing 
            and exclusive collection access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href={`tel:${phoneNumber}`}
              className="group relative flex items-center justify-center gap-4 px-12 py-5 bg-gradient-to-r from-[#C9A14A] to-[#B8941B] text-black rounded-2xl w-full sm:w-auto font-black text-sm tracking-[0.2em] shadow-[0_20px_50px_rgba(201,161,74,0.3)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(201,161,74,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10 flex items-center gap-3">
                <FaPhone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                <span>CALL DIRECTLY</span>
              </div>
            </a>
            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 px-12 py-5 bg-[#25D366] text-white rounded-2xl w-full sm:w-auto font-black text-sm tracking-[0.2em] shadow-[0_20px_50px_rgba(37,211,102,0.2)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(37,211,102,0.4)] transition-all duration-500 overflow-hidden"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              
              <div className="relative z-10 flex items-center gap-3">
                <FaWhatsapp size={22} className="transition-transform duration-300 group-hover:scale-110" />
                <span>WHATSAPP US</span>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
            {[
              { icon: '⏰', text: 'Open 9 AM – 10 PM', sub: 'Daily Service' },
              { icon: '📍', text: 'Beside Bus Stand', sub: 'Narsampet, TS' },
              { icon: '✅', text: '500+ Happy Clients', sub: 'Premium Trust' },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center">
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-white font-bold text-sm tracking-tight">{item.text}</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
