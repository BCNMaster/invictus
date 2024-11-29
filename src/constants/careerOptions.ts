import { CareerPath } from '../types/survey';

export const CAREER_OPTIONS: CareerPath[] = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    category: 'Web Development',
    description: 'Build beautiful, interactive web applications using modern frameworks and tools',
    color: '#6366f1',
    image: '/careers/frontend-dev.jpg',
    estimatedTime: '6 months',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'UI/UX']
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    category: 'Web Development',
    description: 'Create robust server-side applications and APIs that power modern web services',
    color: '#22c55e',
    image: '/careers/backend-dev.jpg',
    estimatedTime: '8 months',
    skills: ['Python', 'Node.js', 'Databases', 'APIs', 'System Design']
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    category: 'Web Development',
    description: 'Master both frontend and backend development to build complete web applications',
    color: '#8b5cf6',
    image: '/careers/fullstack-dev.jpg',
    estimatedTime: '12 months',
    skills: ['Frontend', 'Backend', 'DevOps', 'Databases', 'System Architecture']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data Science',
    description: 'Analyze complex data sets and build machine learning models to derive insights',
    color: '#ec4899',
    image: '/careers/data-scientist.jpg',
    estimatedTime: '9 months',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Analysis', 'SQL']
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    category: 'Design',
    description: 'Design intuitive and delightful user experiences for digital products',
    color: '#f97316',
    image: '/careers/ux-designer.jpg',
    estimatedTime: '6 months',
    skills: ['UI Design', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    category: 'Infrastructure',
    description: 'Streamline development processes and manage cloud infrastructure',
    color: '#06b6d4',
    image: '/careers/devops-engineer.jpg',
    estimatedTime: '10 months',
    skills: ['Cloud Platforms', 'CI/CD', 'Infrastructure as Code', 'Monitoring', 'Security']
  },
  {
    id: 'mobile-developer',
    title: 'Mobile Developer',
    category: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications',
    color: '#14b8a6',
    image: '/careers/mobile-dev.jpg',
    estimatedTime: '8 months',
    skills: ['React Native', 'iOS', 'Android', 'Mobile UI/UX', 'App Performance']
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    category: 'Blockchain',
    description: 'Develop decentralized applications and smart contracts',
    color: '#f59e0b',
    image: '/careers/blockchain-dev.jpg',
    estimatedTime: '10 months',
    skills: ['Solidity', 'Web3.js', 'Smart Contracts', 'DApp Development', 'Blockchain Protocols']
  }
];
