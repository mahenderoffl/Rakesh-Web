import React from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { QRCodeSVG } from 'qrcode.react';

export default function Footer({ onPrivacyClick, onTermsClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] pt-48 pb-16 overflow-hidden border-t border-white/5">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

      <div className="safe-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gold/20 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img src="/rakesh_logo.jpeg" alt="Mangya Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gold-gradient tracking-tighter">Mangya</h3>
                <p className="text-[10px] text-gold/50 font-bold uppercase tracking-[0.3em]">Footwear Elite</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Narsampet's premier destination for luxury footwear. We blend traditional trust with modern style 
              to bring you the finest collection for every occasion.
            </p>
            <div className="flex items-center gap-4 text-white/40">
              <a 
                href="https://www.instagram.com/mangyafootwear/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-gold pl-4">Discover</h4>
            <ul className="space-y-4">
              {[
                { label: 'The Collection', href: '#collection' },
                { label: 'Why Mangya?', href: '#why-us' },
                { label: 'Latest Arrivals', href: '#products' },
                { label: 'Customer Stories', href: '#testimonials' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-gold pl-4">Assistance</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={onPrivacyClick} className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button onClick={onTermsClick} className="text-gray-500 hover:text-white transition-colors">Terms of Service</button>
              </li>
              <li>
                <a href="#store" className="text-gray-500 hover:text-white transition-colors">Store Directions</a>
              </li>
              <li>
                <a href="https://wa.me/916302541440" className="text-gold font-bold flex items-center gap-2">
                   Online Consultation
                   <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>

          {/* Physical Presence */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-gold pl-4">Visit Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-gold"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-white text-sm font-bold">Beside Bus Stand</p>
                  <p className="text-gray-500 text-xs mt-1">Narsampet, Warangal Dist.<br />Telangana, 506132</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-gold"><FaPhone /></div>
                <div>
                  <p className="text-white text-sm font-bold">+91 63025 41440</p>
                  <p className="text-gray-500 text-xs mt-1">Available 9 AM – 10 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Experience - Unique Desktop Feature */}
          <div className="hidden lg:block">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-gold pl-4">Scan for Mobile</h4>
            <div className="p-4 bg-white rounded-2xl inline-block shadow-2xl hover:scale-105 transition-transform duration-500">
              <QRCodeSVG 
                value="https://mangyafootwear.clapinconcepts.workers.dev" 
                size={100}
                level="H"
                includeMargin={false}
                imageSettings={{
                  src: "/favicon.svg",
                  x: undefined,
                  y: undefined,
                  height: 20,
                  width: 20,
                  excavate: true,
                }}
              />
            </div>
            <p className="text-gray-600 text-[10px] mt-4 font-medium uppercase tracking-widest leading-relaxed">
              Continue your elite<br />journey on mobile
            </p>
          </div>

        </div>

        {/* Final Credits */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <p className="text-gray-600 text-xs tracking-wider">
              © {currentYear} <span className="text-white/40">MANGYA FOOTWEAR</span>. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex items-center gap-2 mb-2">
               <span className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">Architected by</span>
               <a 
                href="https://wa.me/919391076809?text=Hi%20WaveSeed%20Growth,%20I'm%20interested%20in%20a%20premium%20website%20like%20Mangya%20Footwear." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold font-black text-xs tracking-tighter hover:text-white transition-colors duration-300"
               >
                 WAVESEED GROWTH
               </a>
            </div>
            <p className="text-[9px] text-gray-700 max-w-[200px] text-center lg:text-right leading-relaxed">
              Propelling brands through high-fidelity digital experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
