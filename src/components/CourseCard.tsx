import { motion } from 'motion/react';
import { Course } from '../types';
import { Clock, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900 border border-white/10 rounded-xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-8 flex-grow">
        {course.badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-500/20">
            {course.badge}
          </span>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="space-y-3 mb-8">
          <div className="flex items-center text-xs text-slate-500">
            <Clock size={14} className="mr-2" />
            <span>Duration: <span className="text-slate-300 font-medium">{course.duration}</span></span>
          </div>
          <div className="flex items-center text-xs text-slate-500">
            <Tag size={14} className="mr-2" />
            <span>Tuition: <span className="text-slate-300 font-medium">{course.price}</span></span>
          </div>
        </div>

        <div className="space-y-2 mb-8">
          <p className="text-xs font-bold text-white uppercase tracking-wider mb-3 underline decoration-lime-400 underline-offset-4">What you'll learn</p>
          {course.syllabus.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-sm text-slate-400">
              <CheckCircle2 size={16} className="text-lime-400 mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <Link 
          to={`/courses/${course.id}`}
          className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-sm hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all"
        >
          <span>Learn More</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 blur-[40px] rounded-full group-hover:bg-lime-400/10 transition-all duration-300" />
    </motion.div>
  );
}
