import { Course, Testimonial, Faculty, BlogPost } from './types';

export const COURSES: Course[] = [
  {
    id: 'sys-arch',
    title: 'Modern System Architecture',
    description: 'Master large-scale distributed systems, microservices, and event-driven design.',
    duration: '12 Weeks',
    price: '$1,299',
    badge: 'Most Popular',
    syllabus: [
      'Distributed Systems Fundamentals',
      'Microservices Design Patterns',
      'Scalability & Load Balancing',
      'Message Queues (Kafka, RabbitMQ)',
      'Database Sharding & Replication'
    ],
    outcomes: [
      'Design systems for 1M+ concurrent users',
      'Master cloud-native architecture',
      'Junior to Mid-Level Architect transition'
    ]
  },
  {
    id: 'cloud-dev',
    title: 'Cloud-Native Development',
    description: 'Build, deploy, and scale applications on AWS, Azure, and Google Cloud.',
    duration: '8 Weeks',
    price: '$899',
    badge: 'New',
    syllabus: [
      'Infrastructure as Code (Terraform)',
      'Docker & Container Orchestration',
      'Serverless Frameworks',
      'CI/CD Pipeline Automation',
      'Cloud Security Essentials'
    ],
    outcomes: [
      'AWS Certified Developer Level',
      'Full-stack Cloud Integration',
      'Automated DevOps workflows'
    ]
  },
  {
    id: 'ai-integration',
    title: 'AI Systems Integration',
    description: 'Embed LLMs and machine learning pipelines into production software systems.',
    duration: '10 Weeks',
    price: '$1,499',
    badge: 'Advanced',
    syllabus: [
      'LLM APIs & Prompt Engineering',
      'RAG (Retrieval Augmented Generation)',
      'Vector Databases',
      'MLOps Pipelines',
      'AI Ethics & Safety'
    ],
    outcomes: [
      'AI-Powered Product Expert',
      'Modern ML Engineer foundation',
      'Enterprise AI Consultant'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Systems Security & Pentesting',
    description: 'Secure full-stack applications and defend against sophisticated cyber threats.',
    duration: '10 Weeks',
    price: '$1,199',
    syllabus: [
      'Web Application Vulnerabilities',
      'Network Security Protocols',
      'Encryption Standards',
      'Incident Response Planning',
      'Identity & Access Management'
    ],
    outcomes: [
      'Security-First Developer mindset',
      'Internal Audit Capabilities',
      'Certified Ethical Hacker prep'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior System Architect',
    company: 'FinTech Solutions',
    content: 'The depth of knowledge at DevAcademy is unparalleled. I went from a junior dev to leading a team of 15 architects within a year of completing the program.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
    salaryIncrease: '+85%'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Cloud Engineer',
    company: 'CloudStream',
    content: 'DevAcademy doesn\'t just teach you how to code; they teach you how systems think. The Cloud-Native course changed my entire career trajectory.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
    salaryIncrease: '+60%'
  },
  {
    id: '3',
    name: 'Ariel Vance',
    role: 'AI Developer',
    company: 'Neural Labs',
    content: 'The AI Integration course is cutting-edge. I was building RAG pipelines within weeks. Truly the best investment I\'ve made for my career.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
    salaryIncrease: '+120%'
  }
];

export const FACULTY: Faculty[] = [
  {
    id: 'dr-k',
    name: 'Dr. Elias Kaelo',
    role: 'Dean of System Architecture',
    bio: 'Former Infrastructure Lead at Google with 20+ years of experience in distributed systems.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop',
    specialties: ['High-Concurrency', 'Microservices', 'Distributed Databases']
  },
  {
    id: 'prof-m',
    name: 'Elena Martinez',
    role: 'Head of Cloud Technologies',
    bio: 'Principal Cloud Architect specializing in multi-cloud strategies and DevOps automation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop',
    specialties: ['AWS/Azure', 'Kubernetes', 'Terraform']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Distributed Systems in 2026',
    date: 'April 20, 2026',
    excerpt: 'Explore how edge computing and sovereign clouds are reshaping architectural patterns.',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop',
    author: 'Dr. Elias Kaelo'
  },
  {
    id: 'post-2',
    title: 'Why Every Developer Should Learn AI Integration',
    date: 'April 15, 2026',
    excerpt: 'AI is no longer a niche field. Learn how to stay relevant in an automated world.',
    category: 'AI & Data',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=500&auto=format&fit=crop',
    author: 'Elena Martinez'
  }
];
