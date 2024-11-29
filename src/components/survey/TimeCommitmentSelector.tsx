import { motion } from 'framer-motion';
import { TimeCommitment } from '../../types/survey';

interface TimeCommitmentSelectorProps {
  value?: TimeCommitment;
  onChange: (commitment: TimeCommitment) => void;
}

const TIME_COMMITMENTS: { value: TimeCommitment; title: string; description: string; hours: string }[] = [
  {
    value: 'minimal',
    title: 'Light',
    description: 'Perfect for busy schedules',
    hours: '2-4 hours/week'
  },
  {
    value: 'moderate',
    title: 'Moderate',
    description: 'Balanced learning pace',
    hours: '5-8 hours/week'
  },
  {
    value: 'intensive',
    title: 'Intensive',
    description: 'Fast-track your learning',
    hours: '10+ hours/week'
  }
];

export default function TimeCommitmentSelector({ value, onChange }: TimeCommitmentSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Time Commitment</h3>
        <p className="text-white/60">How much time can you dedicate to learning each week?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TIME_COMMITMENTS.map((commitment) => (
          <motion.div
            key={commitment.value}
            onClick={() => onChange(commitment.value)}
            className={`p-6 rounded-xl cursor-pointer ${
              value === commitment.value
                ? 'bg-purple-500/20 ring-2 ring-purple-500'
                : 'bg-white/5 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4 className="text-lg font-medium text-white mb-1">{commitment.title}</h4>
            <p className="text-sm text-white/60 mb-2">{commitment.description}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-white">
              {commitment.hours}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
