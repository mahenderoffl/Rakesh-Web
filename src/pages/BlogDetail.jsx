import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import { HiArrowLeft } from 'react-icons/hi';
import CTASection from '../components/CTASection';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOGS.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0F0F] text-white p-4">
        <h1 className="text-4xl font-black mb-6">Blog Post Not Found</h1>
        <Link to="/" className="btn-primary px-8 py-3 rounded-xl">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pt-32">
      {/* Header Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
        
        <div className="absolute inset-0 safe-container flex flex-col justify-end pb-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gold font-bold mb-8 hover:gap-4 transition-all"
          >
            <HiArrowLeft /> BACK TO HOME
          </Link>
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tighter">
            {blog.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
             <span>{blog.date}</span>
             <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
             <span>8 Min Read</span>
             <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
             <span>By Mangya Editorial</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="safe-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article 
              className="prose prose-invert prose-gold max-w-none 
              prose-h2:text-3xl prose-h2:font-black prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:font-bold prose-h3:text-gold prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
              prose-strong:text-white prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            
            <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap gap-4">
               {["Fashion", "Comfort", "Lifestyle", "Trends"].map(tag => (
                 <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-400 font-medium">
                   #{tag}
                 </span>
               ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 rounded-3xl bg-[#141414] border border-gold/10">
              <h4 className="text-white font-black text-xl mb-6">Recent Stories</h4>
              <div className="space-y-8">
                {BLOGS.filter(b => b.id !== blog.id).map(b => (
                  <Link key={b.id} to={`/blog/${b.id}`} className="group block">
                    <div className="flex gap-4 items-start">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/5">
                        <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm leading-snug group-hover:text-gold transition-colors line-clamp-2">
                          {b.title}
                        </h5>
                        <p className="text-gray-500 text-[10px] mt-1 font-medium uppercase">{b.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20">
               <h4 className="text-white font-black text-xl mb-4">Elite Membership</h4>
               <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                 Subscribe to get the latest trends and exclusive discounts directly in your inbox.
               </p>
               <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-sm mb-4 focus:border-gold outline-none transition-colors"
               />
               <button className="btn-primary w-full py-4 rounded-xl font-bold text-sm">SUBSCRIBE NOW</button>
            </div>
          </aside>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
