import { Badge as SurveyBadge, Milestone as SurveyMilestone, LearningProgress as SurveyLearningProgress } from './survey';

// Re-export the types from survey.ts
export type Badge = SurveyBadge;
export type Milestone = SurveyMilestone;
export type LearningProgress = SurveyLearningProgress;

export interface SkillLevel {
  level: number;
  progress: number;
  lastUpdated: Date;
}
