import React, { useState, useEffect, useRef } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Collections', href: '/#collection' },
  { name: 'Why Us', href: '/#why-us' },
  { name: 'Products', href: '/#products' },
  { name: 'Blogs', href: '/#blogs' },
  { name: 'Store', href: '/#store' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // Scroll progress
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);

      // Active link detection (only on home page)
      if (location.pathname === '/') {
        const sections = NAV_LINKS.map((l) => l.href.split('#')[1]);
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top <= 120) {
            setActiveLink(sections[i]);
            break;
          }
        }
      } else {
        setActiveLink('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[100] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #C9A14A, #E8C547, #F5D76E)',
          boxShadow: '0 0 10px rgba(201,161,74,0.8)',
        }}
      />

      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled || location.pathname !== '/'
            ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-2xl shadow-black/50 border-b border-[rgba(201,161,74,0.15)]'
            : 'bg-transparent'
        }`}
        style={{ paddingTop: '2px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-110 shadow-lg border-2 border-gold/30"
                >
                  <img src="/rakesh_logo.jpeg" alt="Mangya Logo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="ml-1">
                <div className="text-2xl font-black text-gold-gradient leading-none tracking-tight">Mangya</div>
                <div className="text-[9px] text-[#C9A14A]/80 font-bold tracking-[0.4em] uppercase mt-1">Footwear Elite</div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <NavLink
                  smooth
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-semibold transition-all duration-300 group ${
                    activeLink === item.href.split('#')[1]
                      ? 'text-[#C9A14A]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      activeLink === item.href.split('#')[1] ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ background: 'linear-gradient(90deg, #C9A14A, #E8C547)' }}
                  />
                </NavLink>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/916302541440"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-[rgba(201,161,74,0.3)] text-[#C9A14A] hover:bg-[rgba(201,161,74,0.1)] transition-all duration-300 hover:border-[#C9A14A] hover:scale-110"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="tel:6302541440"
                className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                <FaPhone size={14} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#C9A14A] border border-[rgba(201,161,74,0.3)] rounded-xl hover:bg-[rgba(201,161,74,0.1)] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: 'rgba(10,10,10,0.98)',
            backdropFilter: 'blur(30px)',
            borderTop: mobileMenuOpen ? '1px solid rgba(201,161,74,0.15)' : 'none',
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {NAV_LINKS.map((item, i) => (
              <NavLink
                smooth
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-[#C9A14A] hover:bg-[rgba(201,161,74,0.08)] transition-all duration-300 font-medium text-sm"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href="tel:6302541440"
                className="btn-primary flex items-center justify-center gap-2 px-4 py-3 text-sm"
              >
                <FaPhone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/916302541440"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold border border-[rgba(201,161,74,0.4)] text-[#C9A14A] hover:bg-[rgba(201,161,74,0.1)] transition-all duration-300"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
