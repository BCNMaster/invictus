import { motion } from 'framer-motion';

interface PricingSectionProps {
  onSelect: (plan: 'free' | 'pro') => void;
}

export default function PricingSection({ onSelect }: PricingSectionProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Choose Your Learning Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/60"
        >
          Start with a free trial or unlock all features instantly
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Trial Plan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
        >
          <div className="absolute -top-5 left-6">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
              Free Trial
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white mb-2">Start Learning</h3>
            <p className="text-white/60 mb-6">Perfect for exploring your interests</p>
            <div className="text-4xl font-bold text-white mb-8">
              $0
              <span className="text-lg font-normal text-white/60">/14 days</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Personalized learning path',
                'Basic progress tracking',
                'Core learning materials',
                'Community access'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => onSelect('free')}
              className="w-full py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg border border-purple-500/20"
        >
          <div className="absolute -top-5 left-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium">
              Recommended
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-white mb-2">Pro Access</h3>
            <p className="text-white/60 mb-6">Accelerate your learning journey</p>
            <div className="text-4xl font-bold text-white mb-8">
              $19
              <span className="text-lg font-normal text-white/60">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Everything in Free Trial',
                'AI-powered learning assistance',
                'Advanced analytics & insights',
                'Priority community support',
                'Calendar integration',
                'Exclusive learning resources',
                'Career coaching sessions'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              onClick={() => onSelect('pro')}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Pro Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
