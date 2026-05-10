import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import { PrivacyPolicy, TermsConditions } from './components/LegalSection';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          <div className="relative h-[400px] md:h-[700px] bg-[#111111] flex items-center justify-center p-12 lg:p-20">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain drop-shadow-[0_30px_60px_rgba(201,161,74,0.4)] transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-[#1A1A1A]">
            <span className="text-gold font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Product Details</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">{product.name}</h2>
            <div className="w-16 h-1 bg-gold/20 mb-10" />
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
              Experience unparalleled luxury and comfort. Handcrafted with premium materials for the elite lifestyle. 
              Each pair is designed to provide maximum support while maintaining a sophisticated aesthetic.
            </p>
            <div className="mb-12">
              <span className="text-gray-500 text-[10px] block mb-2 uppercase tracking-[0.2em] font-bold">Starting Price</span>
              <span className="text-5xl font-black text-gold-gradient tracking-tight">₹{product.price || 'Ask for Best Price'}</span>
            </div>
            
            <a 
              href={`https://wa.me/916302541440?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-4 py-6 text-base font-black tracking-widest rounded-2xl w-full shadow-[0_20px_40px_rgba(201,161,74,0.3)] hover:shadow-[0_25px_50px_rgba(201,161,74,0.5)] transition-all duration-300"
            >
              <FaWhatsapp size={22} />
              ORDER ON WHATSAPP
            </a>
            
            <p className="text-gray-600 text-center mt-10 text-xs italic tracking-wide">
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

  return (
    <Router>
      <div className="bg-[#0F0F0F] text-white min-h-screen">
        <AnnouncementBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home openProduct={openProduct} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>

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
    </Router>
  );
}
