import React, { useState, useEffect } from 'react';
import { HiOutlineTag } from 'react-icons/hi';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = [
    { text: "USE CODE MMFT10 TO GET 10% DISCOUNT!", icon: <HiOutlineTag className="animate-bounce" /> },
    { text: "30% OFF ON ORDERS ABOVE ₹3,000! *T&C APPLY", icon: <HiOutlineTag /> },
    { text: "FREE DELIVERY ACROSS NARSAMPET!", icon: <HiOutlineTag /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#B8941B] via-[#E8C547] to-[#C9A14A] py-2 px-4 relative z-[100]">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-[#0F0F0F] font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-500">
          {announcements[currentIndex].icon}
          <span className="animate-fadeIn">{announcements[currentIndex].text}</span>
        </div>
      </div>
    </div>
  );
}
