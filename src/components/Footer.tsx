import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-8 group">
            <div className="w-8 h-8 bg-lime-400 rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-black font-black text-lg">D</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">DEV<span className="text-lime-400">ACADEMY</span></span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Empowering the next generation of system developers with industry-standard curriculum and elite mentorship.
          </p>
          <div className="flex items-center space-x-4">
            {[Linkedin, Twitter, Github].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Programs</h4>
          <ul className="space-y-4">
            {['System Architecture', 'Cloud Development', 'AI Integration', 'Cybersecurity', 'Database Design'].map((link) => (
              <li key={link}>
                <Link to="/programs" className="text-slate-400 text-sm hover:text-lime-400 flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-lime-400" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Admissions</h4>
          <ul className="space-y-4">
            {['Tuition & Fees', 'Scholarships', 'Application Process', 'International Students', 'FAQs'].map((link) => (
              <li key={link}>
                <Link to="/admissions" className="text-slate-400 text-sm hover:text-lime-400 flex items-center group">
                  <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-lime-400" />
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Support</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <MapPin className="text-lime-400 shrink-0 mt-1" size={18} />
              <span className="text-slate-400 text-sm">124 Innovation Way, Tech District, SF 94103</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-lime-400 shrink-0" size={18} />
              <span className="text-slate-400 text-sm">+1 (800) 555-DEVX</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-lime-400 shrink-0" size={18} />
              <span className="text-slate-400 text-sm">admissions@devacademy.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center relative z-10 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium">
        <p>© 2026 DEVACADEMY EDUCATION INC. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Cookie Settings</a>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime-400/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}
