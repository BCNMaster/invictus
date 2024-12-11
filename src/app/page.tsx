'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CareerSurvey from '../components/CareerSurvey';
import CareerRoadmap from '../components/CareerRoadmap';
import PricingSection from '../components/PricingSection';
import Dashboard from '../components/Dashboard';
import { SurveyResponse, LearningProgress } from '../types/survey';
import { CAREER_OPTIONS } from '../constants/careerOptions';
import Link from 'next/link';  // Added import

export default function Home() {
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [userProgress, setUserProgress] = useState<LearningProgress>({
    completedLessons: 3,
    totalLessons: 24,
    currentStreak: 5,
    longestStreak: 7,
    badges: [
      {
        id: 'first-lesson',
        name: 'First Step',
        description: 'Completed your first lesson',
        image: '/badges/first-lesson.png',
        dateEarned: new Date().toISOString()
      }
    ],
    milestones: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Complete the introduction module',
        progress: 3,
        target: 5,
        completed: false
      }
    ],
    skillLevels: {
      'html': 1,
      'css': 1,
      'javascript': 0
    }
  });

  const handleSurveyComplete = (response: SurveyResponse) => {
    setSelectedCareer(response.careerGoal);
    setSurveyCompleted(true);
    // Smooth scroll to top when showing roadmap
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoadmapComplete = () => {
    setShowPricing(true);
  };

  const handlePlanSelect = (plan: 'free' | 'pro') => {
    // Here you would typically handle the payment/trial signup flow
    // For now, we'll just show the dashboard
    setShowDashboard(true);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1d23]">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10">
        {!showDashboard && (
          <>
            <header className="px-8 py-6">
              <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
                  <span className="text-xl font-medium text-white">Invictus</span>
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center"
                >
                  <Link href="/search">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </Link>
                </motion.button>
              </nav>
            </header>

            <main className="px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                  {!surveyCompleted && (
                    <CareerSurvey onComplete={handleSurveyComplete} />
                  )}
                  {surveyCompleted && !showPricing && selectedCareer && (
                    <CareerRoadmap careerId={selectedCareer} onComplete={handleRoadmapComplete} />
                  )}
                  {showPricing && (
                    <PricingSection onSelect={handlePlanSelect} />
                  )}
                </AnimatePresence>
              </div>
            </main>
          </>
        )}

        {showDashboard && selectedCareer && (
          <Dashboard 
            careerPath={CAREER_OPTIONS.find(career => career.id === selectedCareer) || {
              id: selectedCareer,
              title: 'Your Career Path',
              category: 'General',
              description: 'Your personalized learning journey',
              color: '#6366f1',
              image: '/careers/default.jpg',
              estimatedTime: '6 months',
              skills: []
            }}
            progress={userProgress}
          />
        )}
      </div>
    </div>
  );
}
