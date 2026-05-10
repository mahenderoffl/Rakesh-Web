import React, { useRef, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { MdVerified, MdAccessTime } from 'react-icons/md';

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
    <section className="py-56 relative overflow-hidden bg-[#080808] border-t border-white/5">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24 w-full">
            <a
              href={`tel:${phoneNumber}`}
              className="group relative flex items-center justify-center gap-4 px-14 py-6 bg-gradient-to-r from-[#C9A14A] to-[#B8941B] text-black rounded-2xl w-full sm:w-auto font-black text-xs tracking-[0.25em] shadow-[0_20px_50px_rgba(201,161,74,0.3)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(201,161,74,0.5)] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              <FaPhone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
              <span>CALL DIRECTLY</span>
            </a>
            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-4 px-14 py-6 bg-[#25D366] text-white rounded-2xl w-full sm:w-auto font-black text-xs tracking-[0.25em] shadow-[0_20px_50px_rgba(37,211,102,0.2)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(37,211,102,0.4)] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-[150%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              <FaWhatsapp size={22} className="transition-transform duration-300 group-hover:scale-110" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20 w-full">
            {[
              { icon: <MdAccessTime size={24} />, label: "9:00 AM – 10:00 PM", sub: "DAILY SERVICE" },
              { icon: <FaMapMarkerAlt size={22} />, label: "Beside Bus Stand", sub: "NARSAMPET, TS" },
              { icon: <MdVerified size={24} />, label: "500+ Happy Clients", sub: "PREMIUM TRUST" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-500 border border-white/10 group-hover:border-gold/50 shadow-xl">
                  {item.icon}
                </div>
                <p className="text-white font-black text-sm tracking-tight mb-2 uppercase">{item.label}</p>
                <p className="text-gold/40 text-[10px] font-black tracking-[0.3em] uppercase">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Divider to separate from Footer */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
