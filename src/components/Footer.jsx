import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="footer-gradient relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A14A, #E8C547)', boxShadow: '0 0 20px rgba(201,161,74,0.3)' }}
              >
                <span className="text-[#0F0F0F] font-black text-xl">M</span>
              </div>
              <div>
                <div className="text-xl font-black text-gold-gradient">Mangya</div>
                <div className="text-[10px] text-[#C9A14A]/60 font-semibold tracking-[3px] uppercase">Footwear</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium footwear destination in Narsampet. Serving Men, Women & Kids with the finest quality shoes since day one.
            </p>
            <div className="flex items-center gap-2 text-[#C9A14A]/60 text-xs">
              <MdVerified size={14} />
              <span>Trusted by 500+ Happy Customers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Collections', href: '#collection' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Top Picks', href: '#products' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Visit Store', href: '#store' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-[#C9A14A] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A14A] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:6302541440"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,161,74,0.1)', border: '1px solid rgba(201,161,74,0.2)' }}
                >
                  <FaPhone size={14} style={{ color: '#C9A14A' }} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#C9A14A] transition-colors">6302541440</p>
                  <p className="text-gray-500 text-xs">Tap to call</p>
                </div>
              </a>

              <a
                href="https://wa.me/916302541440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)' }}
                >
                  <FaWhatsapp size={14} style={{ color: '#25D366' }} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#25D366] transition-colors">WhatsApp Us</p>
                  <p className="text-gray-500 text-xs">Chat instantly</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,161,74,0.1)', border: '1px solid rgba(201,161,74,0.2)' }}
                >
                  <FaMapMarkerAlt size={14} style={{ color: '#C9A14A' }} />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Beside Bus Stand</p>
                  <p className="text-gray-500 text-xs">Narsampet, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(201,161,74,0.1)' }}
        >
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Mangya Footwear, Narsampet. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ for premium fashion lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
