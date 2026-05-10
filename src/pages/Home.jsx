import React, { useEffect, useState, Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import MovingBanner from '../components/MovingBanner';

// Lazy load non-critical sections to reduce initial Main Thread blocking
const PremiumShowcase = lazy(() => import('../components/PremiumShowcase'));
const CollectionSection = lazy(() => import('../components/CollectionSection'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const ProductsSection = lazy(() => import('../components/ProductsSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const BlogSection = lazy(() => import('../components/BlogSection'));
const StoreInfo = lazy(() => import('../components/StoreInfo'));
const CTASection = lazy(() => import('../components/CTASection'));

/**
 * Optimized Home Page
 * 1. Lazy loading sections to yield to the Main Thread.
 * 2. Deferring cursor glow initialization.
 */
export default function Home({ openProduct }) {
  const [showDeferred, setShowDeferred] = useState(false);

  useEffect(() => {
    // Yield to the main thread before starting background animations
    const deferTimeout = setTimeout(() => {
      setShowDeferred(true);
      
      // Initialize cursor glow after the main UI is ready
      const cursor = document.createElement('div');
      cursor.className = 'cursor-glow';
      document.body.appendChild(cursor);

      const move = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      window.addEventListener('mousemove', move);
      
      // Cleanup
      return () => {
        window.removeEventListener('mousemove', move);
        if (document.body.contains(cursor)) document.body.removeChild(cursor);
      };
    }, 500); // 500ms delay to let extensions like Apollo finish their heavy initial scan

    return () => clearTimeout(deferTimeout);
  }, []);

  return (
    <main className="w-full">
      <HeroSection />
      <MovingBanner />
      
      {showDeferred && (
        <Suspense fallback={<div className="h-40 bg-[#0F0F0F]" />}>
          <PremiumShowcase onProductClick={openProduct} />
          <CollectionSection />
          <WhyChooseUs />
          <ProductsSection onProductClick={openProduct} />
          <TestimonialsSection />
          <BlogSection />
          <StoreInfo />
          <CTASection />
        </Suspense>
      )}
    </main>
  );
}
