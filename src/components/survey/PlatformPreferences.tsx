import { motion } from 'framer-motion';

type Platform = 'video' | 'articles' | 'courses' | 'projects';

interface PlatformPreferencesProps {
  value: Platform[];
  onChange: (platforms: Platform[]) => void;
}

const PLATFORMS: { value: Platform; title: string; description: string; icon: string }[] = [
  {
    value: 'video',
    title: 'Video Content',
    description: 'Learn through video tutorials and lectures',
    icon: '🎥'
  },
  {
    value: 'articles',
    title: 'Articles & Blogs',
    description: 'Read comprehensive articles and guides',
    icon: '📰'
  },
  {
    value: 'courses',
    title: 'Online Courses',
    description: 'Structured courses with assignments',
    icon: '🎓'
  },
  {
    value: 'projects',
    title: 'Projects',
    description: 'Learn by building real-world projects',
    icon: '🛠️'
  }
];

export default function PlatformPreferences({ value, onChange }: PlatformPreferencesProps) {
  const togglePlatform = (platform: Platform) => {
    if (value.includes(platform)) {
      onChange(value.filter(p => p !== platform));
    } else {
      onChange([...value, platform]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">Preferred Learning Platforms</h3>
        <p className="text-white/60">Select all that interest you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PLATFORMS.map((platform) => (
          <motion.div
            key={platform.value}
            onClick={() => togglePlatform(platform.value)}
            className={`p-6 rounded-xl cursor-pointer ${
              value.includes(platform.value)
                ? 'bg-purple-500/20 ring-2 ring-purple-500'
                : 'bg-white/5 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{platform.icon}</span>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">{platform.title}</h4>
                <p className="text-sm text-white/60">{platform.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
