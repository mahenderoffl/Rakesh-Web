import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * ShadowWrapper uses Shadow DOM (closed mode) to encapsulate its children.
 * This prevents browser extensions from easily scanning or modifying the inner content,
 * which helps avoid "Long Task" blocking from tools like Apollo.io.
 */
export default function ShadowWrapper({ children, className = "" }) {
  const containerRef = useRef(null);
  const shadowRootRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !shadowRootRef.current) {
      // Create a closed shadow root to hide content from extensions
      shadowRootRef.current = containerRef.current.attachShadow({ mode: 'closed' });
      
      // We need to inject styles into the shadow root because it's isolated
      const style = document.createElement('style');
      style.textContent = `
        :host { display: block; }
        .shadow-content { display: contents; }
        
        /* Re-injecting essential tailwind-like styles for the encapsulated buttons */
        .shadow-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 56px;
          border-radius: 16px;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.25em;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          position: relative;
          text-decoration: none;
          box-shadow: 0 20px 50px rgba(201,161,74,0.3);
          background: linear-gradient(to right, #C9A14A, #B8941B);
          color: black;
          cursor: pointer;
        }
        .shadow-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 25px 60px rgba(201,161,74,0.5);
        }
        .shadow-btn-whatsapp {
          background: #25D366;
          color: white;
          box-shadow: 0 20px 50px rgba(37,211,102,0.2);
        }
        .shadow-btn-whatsapp:hover {
          box-shadow: 0 25px 60px rgba(37,211,102,0.4);
        }
        .shimmer {
          position: absolute;
          inset: 0;
          width: 50%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transform: skewX(-25deg) translateX(-150%);
          transition: transform 1s ease-in-out;
        }
        .shadow-btn:hover .shimmer {
          transform: skewX(-25deg) translateX(300%);
        }
      `;
      shadowRootRef.current.appendChild(style);

      // Create a mount point for the children
      const mountPoint = document.createElement('div');
      mountPoint.className = 'shadow-content';
      shadowRootRef.current.appendChild(mountPoint);
      
      const root = ReactDOM.createRoot(mountPoint);
      root.render(children);
    }
  }, [children]);

  return <div ref={containerRef} className={className} />;
}
