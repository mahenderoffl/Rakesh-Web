# Mangya Footwear - Project Setup Instructions

## Project Overview
Premium footwear business website built with React (Vite) and Tailwind CSS for Mangya Footwear located in Narsampet.

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Color Scheme:** Dark theme with gold accents (#0F0F0F background, #C9A14A gold)

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx          - Navigation bar with responsive mobile menu
│   ├── HeroSection.jsx     - Main hero section with CTA buttons
│   ├── CollectionSection.jsx - Product collections (Men, Women, Kids)
│   ├── WhyChooseUs.jsx     - Key selling points
│   ├── StoreInfo.jsx       - Store location and contact info
│   ├── CTASection.jsx      - Call-to-action section
│   └── FloatingWhatsApp.jsx - Sticky WhatsApp button
├── App.jsx                 - Main app component
├── index.css              - Tailwind directives and custom styles
└── main.jsx               - Entry point
```

## Key Features
- Premium black + gold theme
- Fully responsive design (mobile, tablet, desktop)
- Smooth hover effects and transitions
- Fade-in animations on scroll
- Sticky WhatsApp floating button
- Optimized typography (Poppins + Inter fonts)
- WhatsApp integration with pre-filled message
- Phone contact links
- Google Maps integration

## Installation & Setup
1. Navigate to project directory: `cd c:\RakeshWeb`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`
5. Preview production build: `npm run preview`

## Business Information
- **Company Name:** Mangya Footwear
- **Location:** Beside Bus Stand, Narsampet
- **Phone:** 6302541440
- **Hours:** 9:00 AM - 10:00 PM (Monday to Sunday)

## Component Details

### Navbar
- Fixed header with logo and navigation links
- Responsive mobile hamburger menu
- Call button with phone icon
- Gold accent color on hover

### HeroSection
- Large hero heading with gradient text
- Two CTA buttons (Explore Collection & Visit Store)
- Shoe emoji placeholder with bounce animation
- Scroll indicator

### CollectionSection
- 3 collection cards (Men, Women, Kids)
- Card hover effects with scale and shadow
- Emoji icons for visual appeal
- Smooth transitions

### WhyChooseUs
- 4 key selling points in grid layout
- Icon indicators for each point
- Hover effects with border and background changes
- Decorative background shapes

### StoreInfo
- Location with map placeholder
- Phone number (clickable tel link)
- Store hours information
- Get Directions button (Google Maps link)
- Call Now button

### CTASection
- Call button (tel link)
- WhatsApp button with pre-filled message
- Decorative gradient background elements

### FloatingWhatsApp
- Fixed position sticky button
- Pulse animation and notification dot
- Tooltip on hover
- WhatsApp integration with pre-composed message

## Customization

### Colors
Edit in `tailwind.config.js`:
```javascript
colors: {
  'dark': '#0F0F0F',
  'gold': '#C9A14A',
}
```

### Contact Information
Update phone number across components:
- Replace `6302541440` in components where needed

### Store Location
Edit in `StoreInfo.jsx`:
- Update address: "Beside Bus Stand, Narsampet"
- Modify store hours
- Update Google Maps link

## Performance Tips
- Images should be optimized before use
- Keep animations smooth with GPU acceleration
- Test on multiple devices
- Use CSS modules for large projects

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)

## Deployment
Ready for deployment on:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## Future Enhancements
- Product catalog/gallery
- Customer testimonials section
- Instagram feed integration
- Online product ordering
- Customer reviews
- Blog section
- Newsletter signup

## Notes
- All icons are from React Icons library
- Smooth scrolling is enabled globally
- Custom scrollbar styling applied
- Animations are optimized for performance
