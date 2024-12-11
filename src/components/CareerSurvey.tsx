import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SurveyResponse, 
  CareerPath, 
  SurveyState,
  LearningStyle,
  TimeCommitment,
  ExperienceLevel,
  PreferredSchedule
} from '../types/survey';
import ExperienceLevelSelector from './survey/ExperienceLevelSelector';
import GoalsInput from './survey/GoalsInput';
import LearningStyleSelector from './survey/LearningStyleSelector';
import PlatformPreferences from './survey/PlatformPreferences';
import TimeCommitmentSelector from './survey/TimeCommitmentSelector';
import SchedulePreferences from './survey/SchedulePreferences';
import CareerCard from './survey/CareerCard';

const CAREER_OPTIONS: CareerPath[] = [
  {
    id: 'ui_ux',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Create beautiful, intuitive interfaces that users love',
    color: 'from-blue-400/20 to-blue-500/20',
    image: '/images/ui-ux.svg',
    estimatedTime: '6-12 months',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    id: 'web_dev',
    title: 'Web Development',
    category: 'Programming',
    description: 'Build modern web applications with cutting-edge technologies',
    color: 'from-yellow-400/20 to-yellow-500/20',
    image: '/images/web-dev.svg',
    estimatedTime: '8-14 months',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    id: 'digital_art',
    title: 'Digital Art',
    category: 'Design',
    description: 'Express creativity through digital mediums',
    color: 'from-green-400/20 to-green-500/20',
    image: '/images/digital-art.svg',
    estimatedTime: '4-8 months',
    skills: ['Digital Drawing', 'Color Theory', 'Composition', '3D Modeling']
  },
  {
    id: 'data_science',
    title: 'Data Science',
    category: 'Information',
    description: 'Extract insights from data to solve complex problems',
    color: 'from-purple-400/20 to-purple-500/20',
    image: '/images/data-science.svg',
    estimatedTime: '10-16 months',
    skills: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization']
  }
];

const CATEGORIES = ['All', 'Design', 'Programming', 'Information'];

interface CareerSurveyProps {
  onComplete: (response: SurveyResponse) => void;
}

const INITIAL_SURVEY_STATE: SurveyState = {
  currentStep: 0,
  steps: [
    {
      id: 'career',
      title: 'Choose Your Path',
      description: 'Select a career path you\'d like to explore',
      isCompleted: false
    },
    {
      id: 'experience',
      title: 'Your Experience',
      description: 'Tell us about your current level and goals',
      isCompleted: false
    },
    {
      id: 'learning-style',
      title: 'Learning Preferences',
      description: 'How do you learn best?',
      isCompleted: false
    },
    {
      id: 'schedule',
      title: 'Time & Schedule',
      description: 'Plan your learning journey',
      isCompleted: false
    }
  ],
  careerGoal: null,
  learningPreferences: {}
};

export default function CareerSurvey({ onComplete }: CareerSurveyProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [surveyState, setSurveyState] = useState<SurveyState>(INITIAL_SURVEY_STATE);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateSurveyState = (updates: Partial<SurveyState>, autoProgress: boolean = false) => {
    setSurveyState(prev => {
      const newState = {
        ...prev,
        ...updates,
        steps: prev.steps.map((step, index) => ({
          ...step,
          isCompleted: index < prev.currentStep
        }))
      };

      // Auto-progress logic
      if (autoProgress && !isTransitioning) {
        const currentStep = prev.steps[prev.currentStep];
        const preferences = updates.learningPreferences;
        
        switch (currentStep.id) {
          case 'career':
            if (updates.careerGoal) {
              setIsTransitioning(true);
              setTimeout(() => {
                scrollToTop();
                setTimeout(() => {
                  handleNextStep();
                  setIsTransitioning(false);
                }, 400);
              }, 500);
            }
            break;
          case 'learning-style':
            if (preferences?.learningStyle && 
                preferences?.preferredPlatforms && 
                preferences.preferredPlatforms.length > 0) {
              setIsTransitioning(true);
              setTimeout(() => {
                scrollToTop();
                setTimeout(() => {
                  handleNextStep();
                  setIsTransitioning(false);
                }, 400);
              }, 500);
            }
            break;
        }
      }

      return newState;
    });
  };

  const handleNextStep = () => {
    if (surveyState.currentStep < surveyState.steps.length - 1) {
      updateSurveyState({
        currentStep: surveyState.currentStep + 1,
      });
    } else {
      handleComplete();
    }
  };

  const handlePrevStep = () => {
    if (surveyState.currentStep > 0) {
      setIsTransitioning(true);
      scrollToTop();
      setTimeout(() => {
        updateSurveyState({
          currentStep: surveyState.currentStep - 1,
        });
        setIsTransitioning(false);
      }, 400);
    }
  };

  const handleComplete = () => {
    if (surveyState.careerGoal && Object.keys(surveyState.learningPreferences).length > 0) {
      onComplete({
        careerGoal: surveyState.careerGoal,
        preferences: surveyState.learningPreferences as any
      });
    }
  };

  const renderStep = () => {
    const step = surveyState.steps[surveyState.currentStep];
    
    switch (step.id) {
      case 'career':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCareers.map((career) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  isSelected={surveyState.careerGoal === career.id}
                  onSelect={() => updateSurveyState({ careerGoal: career.id }, true)}
                />
              ))}
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-6">
            <ExperienceLevelSelector
              value={surveyState.learningPreferences.experienceLevel}
              onChange={(level) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  experienceLevel: level
                }
              }, false)}
            />
            <GoalsInput
              value={surveyState.learningPreferences.specificGoals || []}
              onChange={(goals) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  specificGoals: goals
                }
              }, false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-end mt-8"
            >
              <button
                onClick={handleNextStep}
                className="px-6 py-3 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors"
                disabled={!surveyState.learningPreferences.experienceLevel}
              >
                Continue
              </button>
            </motion.div>
          </div>
        );
      
      case 'learning-style':
        return (
          <div className="space-y-6">
            <LearningStyleSelector
              value={surveyState.learningPreferences.learningStyle}
              onChange={(style) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  learningStyle: style
                }
              }, true)}
            />
            <PlatformPreferences
              value={surveyState.learningPreferences.preferredPlatforms || []}
              onChange={(platforms) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  preferredPlatforms: platforms
                }
              }, true)}
            />
          </div>
        );
      
      case 'schedule':
        return (
          <div className="space-y-6">
            <TimeCommitmentSelector
              value={surveyState.learningPreferences.timeCommitmentPerWeek}
              onChange={(commitment) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  timeCommitmentPerWeek: commitment
                }
              })}
            />
            <SchedulePreferences
              schedule={surveyState.learningPreferences.preferredSchedule}
              sessionDuration={surveyState.learningPreferences.preferredSessionDuration}
              hasCalendarSync={surveyState.learningPreferences.hasCalendarSync}
              onChange={(schedulePrefs) => updateSurveyState({
                learningPreferences: {
                  ...surveyState.learningPreferences,
                  ...schedulePrefs
                }
              })}
            />
            <div className="flex justify-center pt-8">
              <motion.button
                onClick={handleComplete}
                className="px-8 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create My Learning Path
              </motion.button>
            </div>
          </div>
        );
    }
  };

  const filteredCareers = CAREER_OPTIONS.filter(
    career => selectedCategory === 'All' || career.category === selectedCategory
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-8">
        {surveyState.steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= surveyState.currentStep
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-white/60'
              }`}
              animate={{
                scale: index === surveyState.currentStep ? 1.1 : 1,
                backgroundColor: index <= surveyState.currentStep ? '#A855F7' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {step.isCompleted ? '\u2713' : index + 1}
            </motion.div>
            {index < surveyState.steps.length - 1 && (
              <div
                className={`h-0.5 w-16 mx-2 transition-colors duration-300 ${
                  index < surveyState.currentStep ? 'bg-purple-500' : 'bg-white/10'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={surveyState.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {surveyState.steps[surveyState.current
