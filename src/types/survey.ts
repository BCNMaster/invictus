export interface SurveyResponse {
  careerGoal: string;
  preferences: LearningPreferences;
}

export interface CareerRoadmap {
  title: string;
  description: string;
  timeToComplete: string;
  steps: RoadmapStep[];
}

export interface RoadmapStep {
  title: string;
  description: string;
  duration: string;
  resources: Resource[];
}

export interface Resource {
  title: string;
  type: 'video' | 'article' | 'course' | 'certification';
  url: string;
  duration?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  image: string;
  estimatedTime: string;
  skills: string[];
}

export type LearningStyle = 'visual' | 'reading' | 'interactive' | 'auditory';
export type TimeCommitment = 'minimal' | 'moderate' | 'intensive';
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type PreferredSchedule = 'morning' | 'afternoon' | 'evening' | 'flexible';

export interface LearningPreferences {
  learningStyle: LearningStyle;
  timeCommitmentPerWeek: TimeCommitment;
  experienceLevel: ExperienceLevel;
  preferredSchedule: PreferredSchedule;
  preferredSessionDuration: number; // in minutes
  specificGoals: string[];
  areasOfInterest: string[];
  hasCalendarSync: boolean;
  preferredPlatforms: ('video' | 'articles' | 'courses' | 'projects')[];
}

export interface SurveyStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export interface SurveyState {
  currentStep: number;
  steps: SurveyStep[];
  careerGoal: string | null;
  learningPreferences: Partial<LearningPreferences>;
}

export interface LearningProgress {
  completedLessons: number;
  totalLessons: number;
  currentStreak: number;
  longestStreak: number;
  badges: Badge[];
  milestones: Milestone[];
  skillLevels: Record<string, number>;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  dateEarned: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  completed: boolean;
  dateCompleted?: string;
}

export interface ScheduledSession {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  type: 'lesson' | 'practice' | 'review';
  completed: boolean;
  resources: LearningResource[];
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'interactive' | 'quiz';
  url: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  progress: number;
}

export const PRESET_CAREERS = {
  FINANCIAL_ADVISOR: {
    title: 'Financial Advisor',
    description: 'Help individuals and organizations make informed financial decisions',
    timeToComplete: '2-3 years',
    steps: [
      {
        title: 'Foundation in Finance',
        description: 'Learn basic financial concepts and principles',
        duration: '3-4 months',
        resources: [
          {
            title: 'Introduction to Financial Markets',
            type: 'course',
            url: '#',
            duration: '4 weeks'
          },
          {
            title: 'Personal Finance Fundamentals',
            type: 'course',
            url: '#',
            duration: '6 weeks'
          }
        ]
      },
      {
        title: 'Professional Certification',
        description: 'Obtain necessary certifications',
        duration: '8-12 months',
        resources: [
          {
            title: 'Certified Financial Planner (CFP)',
            type: 'certification',
            url: '#',
            duration: '12 months'
          }
        ]
      },
      {
        title: 'Practical Experience',
        description: 'Gain hands-on experience',
        duration: '12 months',
        resources: [
          {
            title: 'Financial Planning Internship',
            type: 'course',
            url: '#',
            duration: '3-6 months'
          }
        ]
      }
    ]
  },
  SOFTWARE_ENGINEER: {
    title: 'Software Engineer',
    description: 'Design and build software applications',
    timeToComplete: '1-2 years',
    steps: [
      {
        title: 'Programming Fundamentals',
        description: 'Learn core programming concepts',
        duration: '3-4 months',
        resources: [
          {
            title: 'Introduction to Programming',
            type: 'course',
            url: '#',
            duration: '8 weeks'
          },
          {
            title: 'Data Structures and Algorithms',
            type: 'course',
            url: '#',
            duration: '12 weeks'
          }
        ]
      },
      {
        title: 'Web Development',
        description: 'Master modern web technologies',
        duration: '6 months',
        resources: [
          {
            title: 'Full Stack Development',
            type: 'course',
            url: '#',
            duration: '24 weeks'
          }
        ]
      },
      {
        title: 'Project Portfolio',
        description: 'Build real-world projects',
        duration: '3-4 months',
        resources: [
          {
            title: 'Personal Project Development',
            type: 'course',
            url: '#',
            duration: '12 weeks'
          }
        ]
      }
    ]
  }
}
