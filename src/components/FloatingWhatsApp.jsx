import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const message = encodeURIComponent(
    'Hi Mangya Footwear! I am interested in your premium footwear collection. Can you help me find the perfect pair?'
  );

  if (dismissed) return null;

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Chat bubble */}
      {showTooltip && (
        <div
          className="relative glass-gold rounded-2xl px-5 py-4 shadow-2xl max-w-[220px] text-right"
          style={{
            animation: 'slideDown 0.3s ease forwards',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs"
            style={{ background: '#333', color: '#999' }}
            aria-label="Dismiss"
          >
            <HiX size={10} />
          </button>
          <p className="text-white text-sm font-bold mb-0.5">Chat with us! 👋</p>
          <p className="text-gray-400 text-xs leading-snug">
            Get instant help with your footwear needs.
          </p>
          {/* Arrow */}
          <div
            className="absolute -bottom-2 right-6 w-4 h-4 rotate-45"
            style={{ background: 'rgba(201,161,74,0.1)', borderRight: '1px solid rgba(201,161,74,0.2)', borderBottom: '1px solid rgba(201,161,74,0.2)' }}
          />
        </div>
      )}

      {/* Main Button */}
      <a
        href={`https://wa.me/916302541440?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="floating-wa relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: 'rgba(37,211,102,0.3)',
            animationDuration: '2s',
          }}
        />
        {/* Second ring */}
        <div
          className="absolute -inset-1 rounded-full border-2 border-[rgba(37,211,102,0.2)] animate-pulse"
          style={{ animationDuration: '3s' }}
        />

        <FaWhatsapp
          size={30}
          className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
        />
      </a>

      {/* Small label */}
      <div
        className="text-center"
        style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.05em' }}
      >
        WhatsApp
      </div>
    </div>
  );
}
