import React, { useEffect, useState } from 'react';
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
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { PrivacyPolicy, TermsConditions } from './components/LegalSection';

// Product Modal Component
const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const whatsappMsg = encodeURIComponent(
    `Hi Mangya Footwear! I saw this product and I'm interested in ordering: ${product.name}. Price: ${product.price || 'Ask'}`
  );

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-[#1A1A1A] w-full max-w-4xl rounded-3xl overflow-hidden border border-gold/20 shadow-2xl animate-scaleIn">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-gold hover:text-black transition-all duration-300"
        >
          <FaTimes size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-[600px] bg-[#141414] flex items-center justify-center p-8">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(201,161,74,0.3)] transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Product Details</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">{product.name}</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              Experience unparalleled luxury and comfort. Handcrafted with premium materials for the elite lifestyle. 
              Each pair is designed to provide maximum support while maintaining a sophisticated aesthetic.
            </p>
            <div className="mb-10">
              <span className="text-gray-500 text-sm block mb-1 uppercase tracking-widest font-medium">Starting Price</span>
              <span className="text-4xl font-black text-gold-gradient">{product.price || 'Ask for Best Price'}</span>
            </div>
            
            <a 
              href={`https://wa.me/916302541440?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-4 py-5 text-lg font-bold rounded-2xl w-full shadow-[0_0_30px_rgba(201,161,74,0.3)] hover:shadow-[0_0_50px_rgba(201,161,74,0.5)]"
            >
              <FaWhatsapp size={24} />
              ORDER ON WHATSAPP
            </a>
            
            <p className="text-gray-500 text-center mt-6 text-xs italic">
              * Fast delivery across Narsampet and surroundings. Satisfaction guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

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
      <main className="w-full">
        <HeroSection />
        <MovingBanner />
        <PremiumShowcase onProductClick={openProduct} />
        <CollectionSection />
        <WhyChooseUs />
        <ProductsSection onProductClick={openProduct} />
        <TestimonialsSection />
        <BlogSection />
        <StoreInfo />
        <CTASection />
      </main>
      <Footer onPrivacyClick={() => setPrivacyOpen(true)} onTermsClick={() => setTermsOpen(true)} />
      <FloatingWhatsApp />
      
      <ProductModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        product={selectedProduct} 
      />

      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsConditions isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
}
