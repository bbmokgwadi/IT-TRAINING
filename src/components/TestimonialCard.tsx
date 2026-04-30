import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
    >
      <Quote className="absolute top-6 right-8 text-lime-400/10 w-16 h-16" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center space-x-2 px-2 py-1 rounded bg-lime-400/10 text-lime-400 text-[10px] font-black uppercase mb-6 border border-lime-400/20">
          Career Jump: {testimonial.salaryIncrease}
        </div>
        
        <p className="text-slate-300 text-lg italic mb-8 relative">
          "{testimonial.content}"
        </p>

        <div className="flex items-center space-x-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full ring-2 ring-lime-400/30" 
          />
          <div>
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-slate-500 text-xs uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
