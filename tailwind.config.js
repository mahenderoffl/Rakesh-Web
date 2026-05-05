/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0F0F0F',
        'dark-2': '#141414',
        'dark-3': '#1A1A1A',
        'gold': '#C9A14A',
        'gold-light': '#E8C547',
        'gold-bright': '#F5D76E',
        'gold-dark': '#B8941B',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A14A 0%, #E8C547 50%, #F5D76E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0F0F0F 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'float': 'floatY 4s ease-in-out infinite',
        'float-slow': 'floatYSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulsGlow 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer-text': 'shimmer-text 3s linear infinite',
        'scan-line': 'scanLine 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201,161,74,0.3)',
        'gold-lg': '0 0 60px rgba(201,161,74,0.4)',
        'premium': '0 25px 60px rgba(0,0,0,0.5)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
