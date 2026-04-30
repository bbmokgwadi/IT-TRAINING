import { motion } from 'motion/react';
import { UserPlus, MessageSquare, ClipboardCheck, PlayCircle } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Easy Application',
    description: 'Fill out our 5-minute online application form with your background and goals.',
    status: '01'
  },
  {
    icon: MessageSquare,
    title: 'Behavioral Interview',
    description: 'Meet with our admissions panel for a deep dive into your technical curiosities.',
    status: '02'
  },
  {
    icon: ClipboardCheck,
    title: 'Technical Evaluation',
    description: 'Complete a logic-based challenge to assess your system-thinking potential.',
    status: '03'
  },
  {
    icon: PlayCircle,
    title: 'Start Learning',
    description: 'Receive your acceptance and join a cohort of brilliant minds.',
    status: '04'
  }
];

export default function AdmissionsProcess() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative group p-8 bg-white border border-slate-200 rounded-xl hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
        >
          <div className="absolute top-4 right-6 text-4xl font-black text-slate-100 group-hover:text-blue-500/5 transition-colors">
            {step.status}
          </div>
          
          <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-lg flex items-center justify-center mb-6 ring-4 ring-blue-500/5 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
            <step.icon size={28} />
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {step.description}
          </p>

          {idx < steps.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200 z-0" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
