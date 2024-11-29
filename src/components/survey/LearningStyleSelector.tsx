import { motion } from 'framer-motion';
import { LearningStyle } from '../../types/survey';

interface LearningStyleSelectorProps {
  value?: LearningStyle;
  onChange: (style: LearningStyle) => void;
}

const LEARNING_STYLES: { value: LearningStyle; title: string; description: string; icon: string }[] = [
  {
    value: 'visual',
    title: 'Visual Learner',
    description: 'Learn best through images, diagrams, and visual demonstrations',
    icon: '👁️'
  },
  {
    value: 'reading',
    title: 'Reading/Writing',
    description: 'Prefer learning through written content and taking notes',
    icon: '📚'
  },
  {
    value: 'interactive',
    title: 'Interactive',
    description: 'Learn by doing, practicing, and hands-on experiences',
    icon: '🤝'
  },
  {
    value: 'auditory',
    title: 'Auditory',
    description: 'Learn best through listening and discussions',
    icon: '🎧'
  }
];

export default function LearningStyleSelector({ value, onChange }: LearningStyleSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">How do you learn best?</h3>
        <p className="text-white/60">Select your preferred learning style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {LEARNING_STYLES.map((style) => (
          <motion.div
            key={style.value}
            onClick={() => onChange(style.value)}
            className={`p-6 rounded-xl cursor-pointer ${
              value === style.value
                ? 'bg-purple-500/20 ring-2 ring-purple-500'
                : 'bg-white/5 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{style.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">{style.title}</h4>
                <p className="text-sm text-white/60">{style.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
