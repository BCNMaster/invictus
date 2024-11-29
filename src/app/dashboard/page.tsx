import { DashboardHeader } from '@/components/DashboardHeader'
import { LessonCard } from '@/components/LessonCard'

export default function Dashboard() {
  const mockLessons = [
    {
      id: 1,
      title: "Introduction to Modern Politics",
      description: "Learn the fundamentals of modern political systems and current global affairs",
      progress: 0,
      duration: "2 hours",
      nextSession: "2024-01-20T10:00:00Z"
    },
    {
      id: 2,
      title: "Political Theory Basics",
      description: "Understanding core concepts and ideologies in political theory",
      progress: 30,
      duration: "1.5 hours",
      nextSession: "2024-01-22T14:00:00Z"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </main>
    </div>
  )
}
