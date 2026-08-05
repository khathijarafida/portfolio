import type { ComponentType, SVGProps } from 'react';
import { Briefcase, Code2, GraduationCap, Trophy, Award, Languages } from 'lucide-react';

import { Html5, Css3, GitHub, LinkedIn, Mail } from '@/components/icons';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const profile = {
  name: 'Khathija Rafida',
  role: 'Computer Science Engineering Student & Full Stack Developer',
  tagline: "Hi, I'm",
  intro:
    "I'm a Computer Science and Engineering student passionate about building modern web applications, solving problems, and continuously developing my technical skills.",
  phone: '+91 9113658372',
  email: 'khathijarafida00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/khathija-rafida-8bb763332',
  github: '',
};

export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedIn },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const aboutCards = [
  {
    num: '01',
    title: 'Computer Science',
    description: 'Programming, databases & software development',
    icon: Code2,
  },
  {
    num: '02',
    title: 'Full Stack',
    description: 'Frontend & backend web development',
    icon: Briefcase,
  },
  {
    num: '03',
    title: 'Continuous Learning',
    description: 'Improving technical and problem-solving skills',
    icon: GraduationCap,
  },
];

export const experience = {
  company: 'Zephyr Technologies and Solutions Private Limited',
  role: 'Full Stack Developer Intern – Zephyr',
  period: 'July 2026 – Present',
  responsibilities: [
    'Assisting in the design, development, and maintenance of full-stack web applications.',
    'Working on both front-end and back-end components.',
    'Writing clean, efficient, and maintainable code.',
    'Collaborating with senior developers to implement new features.',
    'Troubleshooting bugs.',
    'Improving application performance.',
    'Learning modern web technologies.',
    'Contributing to Agile development projects.',
  ],
};

export const skillGroups: { category: string; items: { name: string; icon: IconType }[] }[] = [
  {
    category: 'Programming',
    items: [{ name: 'Java Programming', icon: Code2 }],
  },
  {
    category: 'Web',
    items: [
      { name: 'HTML', icon: Html5 },
      { name: 'CSS', icon: Css3 },
      { name: 'JavaScript', icon: Code2 },
      { name: 'Full Stack Web Development', icon: Briefcase },
    ],
  },
  {
    category: 'Database',
    items: [{ name: 'SQL', icon: Code2 }],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: GitHub },
      { name: 'GitHub', icon: GitHub },
    ],
  },
  {
    category: 'Other',
    items: [{ name: 'Problem Solving', icon: Trophy }],
  },
];

export const education = {
  degree: 'Bachelor of Engineering',
  field: 'Computer Science and Engineering',
  period: 'September 2023 – Present',
  details: [
    'Building a strong foundation in programming, databases, and software development.',
    'Developing technical and problem-solving skills through academic projects and practical learning.',
  ],
};

export const certifications = [
  {
    title: 'Infosys Springboard Certification',
    detail: 'HTML, CSS & JavaScript',
    icon: Award,
  },
];

export const achievements = [
  {
    title: 'Sankalp – Technical Event',
    description:
      'Participated in Sankalp, a technical event conducted at college, demonstrating teamwork, technical knowledge, and problem-solving skills.',
    icon: Trophy,
  },
];

export const languages = [
  { name: 'English', icon: Languages },
  { name: 'Kannada', icon: Languages },
  { name: 'Hindi', icon: Languages },
];
