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
    <section className="py-32 relative overflow-hidden" style={{ background: '#0c0c0c' }}>
      {/* Dramatic background orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,161,74,0.08) 0%, transparent 70%)' }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-30 hero-bg-grid"
      />

      <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="reveal text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8"
            style={{ background: 'rgba(201,161,74,0.1)', border: '1px solid rgba(201,161,74,0.35)', color: '#C9A14A' }}
          >
            <MdVerified size={14} />
            Get In Touch Today
          </div>

          {/* Heading */}
          <h2 className="font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
            Ready to Upgrade
            <br />
            <span className="text-gold-gradient">Your Style?</span>
          </h2>

          {/* Sub */}
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Connect with our footwear experts. Get personalized recommendations, exclusive offers, and find your perfect pair today.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 justify-center mb-10">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,161,74,0.5))' }} />
            <span className="text-[#C9A14A] text-xs font-bold tracking-widest uppercase">Call or WhatsApp</span>
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(201,161,74,0.5), transparent)' }} />
          </div>

          {/* Big phone display */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block mb-10 group"
          >
            <div
              className="px-8 py-4 rounded-2xl transition-all duration-400 group-hover:scale-105"
              style={{
                background: 'rgba(201,161,74,0.06)',
                border: '1px solid rgba(201,161,74,0.25)',
              }}
            >
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Call Us Directly</p>
              <p
                className="font-black text-gold-gradient"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                +91 63025 41440
              </p>
            </div>
          </a>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`tel:${phoneNumber}`}
              id="cta-call-btn"
              className="btn-primary flex items-center gap-3 px-10 py-4 text-base group w-full sm:w-auto justify-center"
            >
              <FaPhone size={18} />
              <span>Call Now</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-black text-base w-full sm:w-auto transition-all duration-400 hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff',
                boxShadow: '0 0 0 0 rgba(37,211,102,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(37,211,102,0.4), 0 0 60px rgba(37,211,102,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(37,211,102,0.4)';
              }}
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Trust Items */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              '⏰ Open 9 AM – 10 PM',
              '📍 Beside Bus Stand, Narsampet',
              '✅ 500+ Happy Customers',
            ].map((item) => (
              <span key={item} className="text-gray-500 text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
