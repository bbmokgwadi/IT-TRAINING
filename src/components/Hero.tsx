import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-lime-400/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-lime-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
            </span>
            <span>Accredited 2026 Curriculum</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
            Become a <span className="text-lime-400">System Development</span> Expert
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-8 leading-relaxed">
            Master the architecture, cloud infrastructure, and AI systems that power the modern world. Direct mentorship from industry veterans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="bg-lime-400 text-black px-8 py-4 rounded-sm font-black text-lg hover:bg-white transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-[0_0_20px_rgba(163,230,53,0.3)]"
            >
              <span>START YOUR APPLICATION</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/programs"
              className="px-8 py-4 rounded-sm font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-all text-center"
            >
              View Curriculum
            </Link>
          </div>

          <div className="mt-12 flex items-center space-x-8 opacity-60">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">98%</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Placement Rate</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">150+</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Partner Firms</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">$120k</span>
              <span className="text-slate-400 text-xs uppercase tracking-wider">Avg. Salary</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-lime-400/20 z-10" />
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
               alt="Technical Workspace" 
               className="w-full aspect-[4/5] object-cover"
             />
          </div>
          
          {/* Floating cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 z-20 bg-slate-900 border border-white/10 p-5 rounded-xl backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Global Alumni</p>
                <p className="text-slate-400 text-xs">Connected Network</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-slate-900 border border-white/10 p-5 rounded-xl backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-lime-500/20 text-lime-400 rounded-lg">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Real Projects</p>
                <p className="text-slate-400 text-xs">Production Grade</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
