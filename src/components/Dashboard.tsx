import { motion } from 'framer-motion';
import { useState } from 'react';
import { LearningProgress, CareerPath } from '../types/survey';

interface DashboardProps {
  careerPath: CareerPath;
  progress: LearningProgress;
}

export default function Dashboard({ careerPath, progress }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#1a1d23]">
      {/* Sidebar */}
      <motion.nav
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed top-0 left-0 h-screen w-64 bg-white/5 backdrop-blur-xl border-r border-white/10"
      >
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
            <span className="text-xl font-medium text-white">Invictus</span>
          </div>
          <div className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'roadmap', label: 'Learning Path', icon: '🎯' },
              { id: 'resources', label: 'Resources', icon: '📚' },
              { id: 'schedule', label: 'Schedule', icon: '📅' },
              { id: 'community', label: 'Community', icon: '👥' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full px-4 py-3 rounded-xl flex items-center space-x-3 ${
                  activeTab === item.id
                    ? 'bg-purple-500/20 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-start mb-12"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
            <p className="text-white/60">Continue your journey in {careerPath.title}</p>
          </div>
          <motion.button
            className="px-4 py-2 rounded-xl bg-purple-500 text-white flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Resume Learning</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Course Progress',
              value: `${Math.round((progress.completedLessons / progress.totalLessons) * 100)}%`,
              subtitle: `${progress.completedLessons}/${progress.totalLessons} lessons completed`,
              color: 'from-purple-500 to-blue-500'
            },
            {
              title: 'Learning Streak',
              value: `${progress.currentStreak} days`,
              subtitle: `Longest streak: ${progress.longestStreak} days`,
              color: 'from-green-500 to-emerald-500'
            },
            {
              title: 'Time Invested',
              value: '24.5 hours',
              subtitle: 'This month',
              color: 'from-orange-500 to-pink-500'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <h3 className="text-white/60 mb-2">{stat.title}</h3>
              <div className="flex items-end justify-between">
                <div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.subtitle}</div>
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} opacity-20`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity & Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Completed Lesson',
                  description: 'Introduction to UI/UX Design Principles',
                  time: '2 hours ago',
                  icon: '✅'
                },
                {
                  title: 'Earned Badge',
                  description: 'Design Thinking Master',
                  time: '1 day ago',
                  icon: '🏆'
                },
                {
                  title: 'Joined Discussion',
                  description: 'Modern Design Trends 2024',
                  time: '2 days ago',
                  icon: '💬'
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{activity.title}</h3>
                    <p className="text-white/60 text-sm">{activity.description}</p>
                    <span className="text-white/40 text-xs">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Next Steps</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'User Research Methods',
                  duration: '45 mins',
                  type: 'Video Lesson',
                  progress: 0
                },
                {
                  title: 'Creating User Personas',
                  duration: '1 hour',
                  type: 'Interactive Workshop',
                  progress: 0
                },
                {
                  title: 'Design Systems 101',
                  duration: '30 mins',
                  type: 'Reading',
                  progress: 0
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer group"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-medium">{step.title}</h3>
                    <span className="text-white/40 text-sm">{step.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">{step.type}</span>
                    <motion.button
                      className="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
