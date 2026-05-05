# Mangya Footwear - Premium Footwear Business Website

A modern, premium footwear business website built with React, Vite, and Tailwind CSS for Mangya Footwear located in Narsampet.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Features

✨ **Premium Design**
- Black + gold color theme (#0F0F0F & #C9A14A)
- Minimal, clean UI with modern aesthetics
- Smooth hover effects and transitions

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Responsive navigation with mobile menu

🎨 **Modern Components**
- Hero section with animated scroll indicator
- Product collection cards with hover effects
- "Why Choose Us" section with key benefits
- Store information section with location details
- Call-to-action sections
- Sticky WhatsApp floating button

⚡ **Performance**
- Built with Vite for fast development
- Optimized animations using CSS
- Minimal JavaScript bundle size
- Smooth page transitions

🔗 **Integration**
- WhatsApp chat integration with pre-filled messages
- Phone call links (tel:)
- Google Maps integration
- Social-ready structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with mobile menu
│   ├── HeroSection.jsx         # Main hero banner
│   ├── CollectionSection.jsx   # Product categories
│   ├── WhyChooseUs.jsx        # Brand benefits
│   ├── StoreInfo.jsx          # Location & hours
│   ├── CTASection.jsx         # Call-to-action
│   └── FloatingWhatsApp.jsx   # Sticky WhatsApp button
├── App.jsx                    # Main app component
├── index.css                  # Tailwind & custom styles
└── main.jsx                   # Entry point
```

## 🎯 Sections

### 1. Navigation Bar
- Fixed header with logo
- Responsive mobile menu
- Quick call button
- Smooth scrolling navigation

### 2. Hero Section
- Eye-catching headline: "Step Into Premium Style"
- Subheadline highlighting product categories
- Dual CTA buttons (Explore Collection & Visit Store)
- Animated scroll indicator

### 3. Collection Section
- Three product category cards (Men, Women, Kids)
- Hover effects with scale and shadow
- Descriptive text for each category
- Visual emoji indicators

### 4. Why Choose Us Section
- Four key benefits grid
- Premium Quality
- Affordable Prices
- Latest Trends
- All-Day Comfort

### 5. Store Information Section
- Location: "Beside Bus Stand, Narsampet"
- Phone: 6302541440
- Business Hours: 9 AM - 10 PM (Daily)
- Get Directions button (Google Maps)
- Call button

### 6. CTA Section
- Prominent call-to-action messaging
- Two action buttons:
  - Call Now (tel link)
  - WhatsApp Us (with pre-filled message)

### 7. Floating WhatsApp Button
- Fixed position sticky button
- Pulse animation effect
- Notification indicator dot
- Hover tooltip
- Pre-composed message

## 🎨 Customization

### Update Business Information

In all components, replace:
- **Phone:** 6302541440
- **Location:** Beside Bus Stand, Narsampet
- **Hours:** Update as needed in StoreInfo.jsx

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'dark': '#0F0F0F',      // Background
  'gold': '#C9A14A',      // Primary accent
}
```

### Modify Typography

Current fonts: **Poppins** (primary) & **Inter** (secondary)

Change in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **react-icons** - Icon library (FaPhone, FaWhatsapp, etc.)
- **tailwindcss** - Utility-first CSS framework
- **postcss** - CSS transformations
- **autoprefixer** - CSS vendor prefixes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md)
- **Desktop:** > 1024px (lg)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Build for Production
```bash
npm run build
# Output: dist/ directory
```

## 📈 Performance Metrics

- Optimized for Core Web Vitals
- Fast load times with Vite
- Smooth 60fps animations
- Mobile-optimized images
- CSS tree-shaking

## 🔧 Development Tips

1. **HMR (Hot Module Replacement)** - Changes reflect instantly
2. **Component-Based** - Easy to maintain and scale
3. **Tailwind Utilities** - Fast styling without CSS files
4. **Responsive Design** - Test with DevTools device emulation

## 📞 Contact Information

**Mangya Footwear**
- Location: Beside Bus Stand, Narsampet
- Phone: 6302541440
- Hours: 9:00 AM - 10:00 PM (Daily)

## 📝 License

This project is created for Mangya Footwear business website.

## 🎉 Features You Can Add

- Product catalog with filtering
- Customer testimonials section
- Instagram feed integration
- Online product ordering
- Customer reviews & ratings
- Blog section
- Newsletter signup
- Product comparison
- Size guide
- Delivery information

## 🤝 Support

For issues or questions about the website, contact Mangya Footwear at 6302541440.

---

Built with ❤️ using React, Vite, and Tailwind CSS
