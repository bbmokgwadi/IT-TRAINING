import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '/programs' },
    { name: 'About', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Success', href: '/success' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-lime-400 rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-black font-black text-xl">D</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">DEV<span className="text-lime-400">ACADEMY</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-lime-400',
                location.pathname === link.href ? 'text-lime-400' : 'text-slate-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/apply"
            className="bg-lime-400 text-black px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-white transition-colors flex items-center space-x-2"
          >
            <span>ENROLL NOW</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-lime-400"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="bg-lime-400 text-black px-6 py-3 rounded-sm text-center font-bold"
              >
                ENROLL NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
