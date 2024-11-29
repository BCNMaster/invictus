import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GoalsInputProps {
  value: string[];
  onChange: (goals: string[]) => void;
}

const SUGGESTED_GOALS = [
  'Build a portfolio',
  'Switch careers',
  'Get a promotion',
  'Start a business',
  'Learn new skills',
  'Stay current in field'
];

export default function GoalsInput({ value, onChange }: GoalsInputProps) {
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = (goal: string) => {
    if (goal && !value.includes(goal)) {
      onChange([...value, goal]);
      setNewGoal('');
    }
  };

  const handleRemoveGoal = (goalToRemove: string) => {
    onChange(value.filter(goal => goal !== goalToRemove));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are your goals?</h3>
        <p className="text-white/60 mb-6">Select from common goals or add your own</p>
      </div>

      {/* Suggested Goals */}
      <div className="flex flex-wrap gap-3 mb-6">
        {SUGGESTED_GOALS.map(goal => (
          <motion.button
            key={goal}
            onClick={() => handleAddGoal(goal)}
            className={`px-4 py-2 rounded-full text-sm ${
              value.includes(goal)
                ? 'bg-purple-500 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={value.includes(goal)}
          >
            {goal}
          </motion.button>
        ))}
      </div>

      {/* Custom Goal Input */}
      <div className="flex gap-3">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddGoal(newGoal)}
          placeholder="Add a custom goal..."
          className="flex-1 px-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <motion.button
          onClick={() => handleAddGoal(newGoal)}
          className="px-4 py-2 rounded-lg bg-purple-500 text-white disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!newGoal}
        >
          Add
        </motion.button>
      </div>

      {/* Selected Goals */}
      <div className="space-y-2">
        <AnimatePresence>
          {value.map(goal => (
            <motion.div
              key={goal}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/5"
            >
              <span className="text-white">{goal}</span>
              <button
                onClick={() => handleRemoveGoal(goal)}
                className="text-white/60 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
