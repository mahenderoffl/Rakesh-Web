import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs';

const BlogPost = ({ id, title, excerpt, date, image, category, delay }) => {
  return (
    <Link 
      to={`/blog/${id}`}
      className={`reveal-scale visible group relative bg-[#141414] rounded-3xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700 delay-${delay} flex flex-col h-full hover:-translate-y-2`}
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1.5 bg-gold/10 backdrop-blur-md text-gold text-[10px] font-black uppercase tracking-widest border border-gold/20 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="text-gold/40 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          {date}
        </div>
        <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors duration-300 mb-4 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
          {excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-widest group-hover:gap-5 transition-all">
          Read Full Story 
          <span className="w-8 h-[1px] bg-gold/30 group-hover:w-12 transition-all" />
        </div>
      </div>
    </Link>
  );
};

const BlogSection = () => {
  return (
    <section id="blogs" className="py-48 bg-[#0F0F0F] relative overflow-hidden border-t border-white/5">
      <div className="safe-container relative z-10">
        <div className="text-center mb-28 flex flex-col items-center">
          <h3 className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8 block animate-fadeInUp">
            The Journal
          </h3>
          <h2 className="text-5xl md:text-8xl font-black mb-10 animate-fadeInUp leading-none tracking-tighter">
            STEP INTO <span className="text-gold-gradient">INSIGHTS</span>
          </h2>
          <div className="section-divider mb-12 w-24 h-[2px] bg-gold/30 mx-auto" />
          <p className="text-gray-400 max-w-3xl text-center text-lg md:text-2xl font-light leading-relaxed mb-12">
            Exploring the intersection of luxury fashion, ergonomic comfort, and 
            the evolving premium lifestyle of the modern individual.
          </p>
          <button className="btn-outline px-12 py-5 text-[10px] font-black tracking-[0.3em] uppercase">
            <span>Explore All Stories</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog, index) => (
            <BlogPost key={blog.id} {...blog} delay={(index + 1) * 100} />
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]" />
      </div>
    </section>
  );
};

export default BlogSection;
