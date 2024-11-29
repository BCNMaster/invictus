import { motion } from 'framer-motion';
import { CareerPath } from '../types/survey';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface RoadmapStep {
  title: string;
  description: string;
  duration: string;
  resources: string[];
  skills: string[];
}

const ROADMAP_DATA: Record<string, RoadmapStep[]> = {
  ui_ux: [
    {
      title: 'Foundations of Design',
      description: 'Learn the core principles of design and visual communication',
      duration: '4-6 weeks',
      resources: ['Design Theory Course', 'Color Theory Basics', 'Typography Fundamentals'],
      skills: ['Design Principles', 'Color Theory', 'Typography']
    },
    {
      title: 'User Research & Psychology',
      description: 'Understanding user behavior and research methodologies',
      duration: '6-8 weeks',
      resources: ['User Research Methods', 'Behavioral Psychology', 'Interview Techniques'],
      skills: ['User Research', 'Data Analysis', 'User Interviews']
    },
    {
      title: 'UI Design Tools',
      description: 'Master industry-standard design tools and workflows',
      duration: '8-10 weeks',
      resources: ['Figma Advanced Course', 'Design Systems', 'Prototyping Tools'],
      skills: ['Figma', 'Design Systems', 'Prototyping']
    }
  ],
  web_dev: [
    {
      title: 'Frontend Fundamentals',
      description: 'Master HTML, CSS, and JavaScript essentials',
      duration: '8-10 weeks',
      resources: ['Web Development Bootcamp', 'JavaScript Course', 'CSS Mastery'],
      skills: ['HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'React Development',
      description: 'Build modern web applications with React',
      duration: '10-12 weeks',
      resources: ['React Complete Guide', 'State Management', 'React Patterns'],
      skills: ['React', 'Redux', 'Next.js']
    },
    {
      title: 'Backend Integration',
      description: 'Connect your frontend with APIs and databases',
      duration: '8-10 weeks',
      resources: ['API Design', 'Database Fundamentals', 'Authentication'],
      skills: ['Node.js', 'REST APIs', 'Databases']
    }
  ],
  digital_art: [
    {
      title: 'Digital Drawing Basics',
      description: 'Learn fundamental digital art techniques',
      duration: '6-8 weeks',
      resources: ['Digital Art Fundamentals', 'Drawing Techniques', 'Color Theory'],
      skills: ['Digital Drawing', 'Color Theory', 'Composition']
    },
    {
      title: '2D Character Design',
      description: 'Create compelling characters and illustrations',
      duration: '8-10 weeks',
      resources: ['Character Design Course', 'Anatomy for Artists', 'Style Development'],
      skills: ['Character Design', 'Anatomy', 'Illustration']
    },
    {
      title: '3D Modeling',
      description: 'Introduction to 3D art and modeling',
      duration: '10-12 weeks',
      resources: ['3D Modeling Basics', 'Texturing', 'Animation'],
      skills: ['Blender', '3D Modeling', 'Texturing']
    }
  ],
  data_science: [
    {
      title: 'Python Programming',
      description: 'Learn Python for data analysis',
      duration: '6-8 weeks',
      resources: ['Python for Data Science', 'NumPy & Pandas', 'Data Structures'],
      skills: ['Python', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Data Analysis & Visualization',
      description: 'Master data analysis techniques and visualization',
      duration: '8-10 weeks',
      resources: ['Data Analysis Course', 'Visualization Tools', 'Statistical Methods'],
      skills: ['Data Analysis', 'Visualization', 'Statistics']
    },
    {
      title: 'Machine Learning',
      description: 'Build and deploy machine learning models',
      duration: '12-14 weeks',
      resources: ['ML Fundamentals', 'Deep Learning', 'Model Deployment'],
      skills: ['Machine Learning', 'Deep Learning', 'Model Deployment']
    }
  ]
};

const CAREER_OPTIONS = [
  { id: 'ui_ux', title: 'UI/UX Designer' },
  { id: 'web_dev', title: 'Web Developer' },
  { id: 'digital_art', title: 'Digital Artist' },
  { id: 'data_science', title: 'Data Scientist' }
];

interface CareerRoadmapProps {
  careerId: string;
  onComplete: () => void;
}

export default function CareerRoadmap({ careerId, onComplete }: CareerRoadmapProps) {
  const roadmapSteps = ROADMAP_DATA[careerId] || [];
  const selectedCareer = CAREER_OPTIONS.find(career => career.id === careerId);

  if (!selectedCareer) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-white/80">Career path not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold gradient-text">Your Learning Journey</h1>
          <p className="text-lg text-white/60">
            Personalized roadmap for becoming a {selectedCareer.title}
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-4 bottom-4 w-px bg-white/10" />

        {/* Steps */}
        {roadmapSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative pl-20 pb-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-[29px] top-2.5 w-3 h-3 rounded-full bg-white/20">
              <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
            </div>

            {/* Content */}
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="absolute -left-4 top-6 w-8 h-px bg-white/10" />
              
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{step.description}</p>
                  </div>
                  <span className="px-3 py-1 text-sm text-white/80 bg-white/5 rounded-full">
                    {step.duration}
                  </span>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white/80">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs text-white/70 bg-white/5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white/80">Learning resources:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.resources.map((resource, resourceIndex) => (
                      <div
                        key={resourceIndex}
                        className="flex items-center space-x-2 p-2 rounded-lg bg-white/5"
                      >
                        <svg
                          className="w-4 h-4 text-white/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="text-sm text-white/70">{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={onComplete}
          className="px-8 py-3 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
        >
          Continue to Pricing
        </button>
      </motion.div>
    </div>
  );
}
