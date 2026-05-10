import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovingBanner from './components/MovingBanner';
import CollectionSection from './components/CollectionSection';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import StoreInfo from './components/StoreInfo';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import PremiumShowcase from './components/PremiumShowcase';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  // Cursor glow effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MovingBanner />
        <PremiumShowcase />
        <CollectionSection />
        <WhyChooseUs />
        <ProductsSection />
        <TestimonialsSection />
        <BlogSection />
        <StoreInfo />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
