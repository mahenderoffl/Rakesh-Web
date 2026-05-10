import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

/**
 * FloatingQR - A stable, floating QR code for desktop visitors.
 * Positioned on the right side above the WhatsApp button.
 */
export default function FloatingQR() {
  return (
    <div className="hidden lg:flex fixed bottom-32 right-7 z-50 flex-col items-center gap-3">
      <div className="group relative">
        {/* Tooltip Label */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md text-gold text-[10px] font-black tracking-widest px-4 py-2 rounded-lg border border-gold/20 whitespace-nowrap shadow-2xl">
            SCAN TO VIEW ON MOBILE
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-6 w-2 h-2 bg-black/80 rotate-45 -translate-y-1 border-r border-b border-gold/20" />
        </div>

        {/* QR Container - Stable, no hover movement */}
        <div className="p-3 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
          <QRCodeSVG 
            value="https://mangyafootwear.clapinconcepts.workers.dev" 
            size={70}
            level="H"
            includeMargin={false}
            imageSettings={{
              src: "/favicon.svg",
              x: undefined,
              y: undefined,
              height: 14,
              width: 14,
              excavate: true,
            }}
          />
        </div>
      </div>
      
      {/* Label under QR */}
      <div className="text-[10px] text-white/40 font-black tracking-[0.2em] uppercase">
        Mobile View
      </div>
    </div>
  );
}
