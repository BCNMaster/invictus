import { motion } from 'framer-motion';
import { PreferredSchedule } from '../../types/survey';

interface SchedulePreferencesProps {
  schedule?: PreferredSchedule;
  sessionDuration?: number;
  hasCalendarSync?: boolean;
  onChange: (prefs: {
    preferredSchedule?: PreferredSchedule;
    preferredSessionDuration?: number;
    hasCalendarSync?: boolean;
  }) => void;
}

const SCHEDULES: { value: PreferredSchedule; title: string; description: string }[] = [
  {
    value: 'morning',
    title: 'Morning',
    description: 'Start your day with learning'
  },
  {
    value: 'afternoon',
    title: 'Afternoon',
    description: 'Learn during the day'
  },
  {
    value: 'evening',
    title: 'Evening',
    description: 'Learn after work/school'
  },
  {
    value: 'flexible',
    title: 'Flexible',
    description: 'Adapt to your schedule'
  }
];

const SESSION_DURATIONS = [
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' },
  { value: 90, label: '1.5 hours' }
];

export default function SchedulePreferences({
  schedule,
  sessionDuration,
  hasCalendarSync,
  onChange
}: SchedulePreferencesProps) {
  return (
    <div className="space-y-8">
      {/* Preferred Schedule */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Preferred Schedule</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCHEDULES.map((scheduleOption) => (
            <motion.div
              key={scheduleOption.value}
              onClick={() => onChange({ preferredSchedule: scheduleOption.value })}
              className={`p-4 rounded-xl cursor-pointer text-center ${
                schedule === scheduleOption.value
                  ? 'bg-purple-500/20 ring-2 ring-purple-500'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h4 className="text-lg font-medium text-white mb-1">{scheduleOption.title}</h4>
              <p className="text-sm text-white/60">{scheduleOption.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Session Duration */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Preferred Session Duration</h3>
        <div className="flex flex-wrap gap-3">
          {SESSION_DURATIONS.map((duration) => (
            <motion.button
              key={duration.value}
              onClick={() => onChange({ preferredSessionDuration: duration.value })}
              className={`px-4 py-2 rounded-full ${
                sessionDuration === duration.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {duration.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Calendar Sync */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Calendar Integration</h3>
        <motion.div
          onClick={() => onChange({ hasCalendarSync: !hasCalendarSync })}
          className={`p-6 rounded-xl cursor-pointer ${
            hasCalendarSync
              ? 'bg-purple-500/20 ring-2 ring-purple-500'
              : 'bg-white/5 hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-medium text-white mb-1">Sync with Calendar</h4>
              <p className="text-sm text-white/60">
                We'll schedule your learning sessions around your existing commitments
              </p>
            </div>
            <div className={`w-6 h-6 rounded-md ${hasCalendarSync ? 'bg-purple-500' : 'bg-white/10'} flex items-center justify-center`}>
              {hasCalendarSync && (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
