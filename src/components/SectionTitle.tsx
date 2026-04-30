import { motion } from 'motion/react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, align = 'center', light = false }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-lime-400/20 bg-lime-400/5 text-lime-400 text-[10px] font-black tracking-[0.2em] uppercase mb-4"
      >
        <span>Academy Insight</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-black mb-6 tracking-tight ${light ? 'text-slate-950' : 'text-white'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-slate-600' : 'text-slate-400'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
