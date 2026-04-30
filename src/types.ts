export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  badge?: 'Most Popular' | 'New' | 'Advanced';
  syllabus: string[];
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  company?: string;
  salaryIncrease?: string;
}

export interface Faculty {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
}
