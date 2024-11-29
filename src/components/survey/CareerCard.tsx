import { motion } from 'framer-motion';
import { CareerPath } from '../../types/survey';

interface CareerCardProps {
  career: CareerPath;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CareerCard({ career, isSelected, onSelect }: CareerCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ y: -4 }}
      onClick={onSelect}
      className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-white/20' : ''
      }`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${career.color}`} />
      
      {/* Content */}
      <div className="relative p-6 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/80 mb-4">
              {career.category}
            </span>
            <h3 className="text-xl font-semibold text-white mb-2">{career.title}</h3>
            <p className="text-sm text-white/60 mb-4">{career.description}</p>
            {career.skills && (
              <div className="flex flex-wrap gap-2">
                {career.skills.slice(0, 2).map((skill) => (
                  <span key={skill} className="inline-block px-2 py-1 rounded-md bg-white/5 text-xs text-white/70">
                    {skill}
                  </span>
                ))}
                {career.skills.length > 2 && (
                  <span className="inline-block px-2 py-1 rounded-md bg-white/5 text-xs text-white/70">
                    +{career.skills.length - 2} more
                  </span>
                )}
              </div>
            )}
          </div>
          <motion.div
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
