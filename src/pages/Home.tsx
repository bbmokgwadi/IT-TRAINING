import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import AdmissionsProcess from '../components/AdmissionsProcess';
import BlogSection from '../components/BlogSection';
import { COURSES, TESTIMONIALS, BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Users, BookOpen, Briefcase, Award } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Trust Stats Section */}
      <section className="py-20 bg-slate-950 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: Users, label: 'Alumni Network', value: '4,500+' },
            { icon: BookOpen, label: 'Active Courses', value: '18+' },
            { icon: Briefcase, label: 'Work Partnerships', value: '150+' },
            { icon: Award, label: 'Industry Awards', value: '12' },
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex p-3 rounded-lg bg-white/5 text-lime-400 mb-4 group-hover:bg-lime-400 group-hover:text-black transition-all">
                <stat.icon size={24} />
              </div>
              <p className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-slate-900/50" id="programs">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Industry-Standard Curriculum" 
            subtitle="Deep-dive programs designed and taught by architects who have built tech for the top 1% of Silicon Valley."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Real Outcomes, Real People" 
            subtitle="The trajectory of our students isn't just about jobs; it's about becoming leaders in technical innovation."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="The Enrollment Path" 
            subtitle="We seek original thinkers and problem solvers. Our process is designed to find potential, not just experience."
            light
          />
          <AdmissionsProcess />
        </div>
      </section>

      {/* Blog & Industry Insights */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="Technical Insights" 
            subtitle="Exploration into the future of systems, AI, and cloud development from our faculty and industry partners."
          />
          <BlogSection posts={BLOG_POSTS} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 z-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to engineer <br /> <span className="text-lime-400 italic">the future?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Join our next cohort starting <span className="text-white font-bold underline decoration-lime-400 underline-offset-4">May 15th, 2026</span>. Limited seats available for elite mentorship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-lime-400 text-black px-10 py-5 rounded-sm font-black text-xl hover:bg-white transition-all transform hover:scale-110 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                APPLY FOR ADMISSION
              </button>
              <button className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-sm font-bold text-xl hover:bg-white transition-all transform hover:scale-105">
                DOWNLOAD GUIDE
              </button>
            </div>
            
            {/* Background floating numbers */}
            <div className="absolute top-10 left-10 text-9xl font-black text-white/[0.02] select-none pointer-events-none">01</div>
            <div className="absolute bottom-10 right-10 text-9xl font-black text-white/[0.02] select-none pointer-events-none">00</div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
