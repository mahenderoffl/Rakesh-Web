import React from 'react';

const BlogPost = ({ title, excerpt, date, image, category, delay }) => {
  return (
    <div 
      className={`reveal-scale visible group relative bg-[#141414] rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 delay-${delay}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold text-dark text-[10px] font-bold uppercase tracking-wider rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-gold/50 text-[10px] font-medium uppercase tracking-[0.2em] mb-2">
          {date}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          {excerpt}
        </p>
        <button className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
          Read Story 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      title: "The Art of Choosing the Perfect Footwear for Indian Occasions",
      excerpt: "From weddings to daily wear, understand how to balance style and comfort in the vibrant Indian climate.",
      date: "May 10, 2026",
      image: "/womens_shoe.png",
      category: "Fashion Guide",
      delay: "100"
    },
    {
      title: "Why Comfort Should Be Your Top Priority in Footwear",
      excerpt: "Exploring the science of ergonomic design and how premium materials enhance your daily walking experience.",
      date: "May 08, 2026",
      image: "/hero_shoe.png",
      category: "Lifestyle",
      delay: "200"
    },
    {
      title: "Trending Shoe Styles for the Modern Woman in 2026",
      excerpt: "A deep dive into the latest trends hitting the streets of Narsampet and beyond this season.",
      date: "May 05, 2026",
      image: "/collection_shoes.png",
      category: "Trends",
      delay: "300"
    }
  ];

  return (
    <section id="blogs" className="py-40 bg-[#0F0F0F] relative overflow-hidden">
      <div className="safe-container relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <h3 className="text-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block animate-fadeInUp">
            Our Journal
          </h3>
          <h2 className="text-4xl md:text-7xl font-black mb-8 animate-fadeInUp leading-none tracking-tighter">
            STEP INTO <span className="text-gold-gradient">INSIGHTS</span>
          </h2>
          <div className="section-divider mb-10 w-24 h-[2px] bg-gold/30 mx-auto" />
          <p className="text-gray-400 max-w-2xl text-center text-lg md:text-xl font-light leading-relaxed mb-10">
            Exploring the intersection of fashion, comfort, and premium lifestyle. 
            Your guide to the latest in elite footwear.
          </p>
          <button className="btn-outline px-10 py-4 text-xs">
            <span>Explore All Stories</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogPost key={index} {...blog} />
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default BlogSection;
