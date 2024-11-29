import { motion } from 'framer-motion';
import { ExperienceLevel } from '../../types/survey';

interface ExperienceLevelSelectorProps {
  value?: ExperienceLevel;
  onChange: (level: ExperienceLevel) => void;
}

const EXPERIENCE_LEVELS: { value: ExperienceLevel; title: string; description: string }[] = [
  {
    value: 'beginner',
    title: 'Beginner',
    description: 'New to the field, eager to learn fundamentals'
  },
  {
    value: 'intermediate',
    title: 'Intermediate',
    description: 'Have some experience, looking to expand knowledge'
  },
  {
    value: 'advanced',
    title: 'Advanced',
    description: 'Experienced, seeking to master advanced concepts'
  }
];

export default function ExperienceLevelSelector({ value, onChange }: ExperienceLevelSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Select your experience level</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EXPERIENCE_LEVELS.map((level) => (
          <motion.div
            key={level.value}
            onClick={() => onChange(level.value)}
            className={`p-6 rounded-xl cursor-pointer ${
              value === level.value
                ? 'bg-purple-500/20 ring-2 ring-purple-500'
                : 'bg-white/5 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-lg font-medium text-white mb-2">{level.title}</h4>
            <p className="text-sm text-white/60">{level.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
