import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-lime-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
          {post.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-4">
          <span className="flex items-center"><Calendar size={12} className="mr-1 text-lime-400" /> {post.date}</span>
          <span className="flex items-center"><User size={12} className="mr-1 text-lime-400" /> By {post.author}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center space-x-2 text-lime-400 text-xs font-black uppercase tracking-widest group/link"
        >
          <span>Read Insight</span>
          <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      
      <div className="flex flex-col justify-center bg-lime-400/5 border border-lime-400/10 p-10 rounded-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h4 className="text-2xl font-black text-white mb-4">Stay ahead of the curve.</h4>
          <p className="text-slate-400 text-sm mb-8">Join 5,000+ developers receiving weekly system design insights in their inbox.</p>
          
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="you@company.com" 
              className="w-full bg-slate-950 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:border-lime-400 focus:outline-none transition-colors"
            />
            <button className="w-full bg-lime-400 text-black font-black text-sm py-3 rounded-sm hover:bg-white transition-colors">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lime-400/10 blur-[60px] rounded-full group-hover:scale-150 transition-transform duration-700" />
      </div>
    </div>
  );
}
