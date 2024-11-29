interface Lesson {
  id: number
  title: string
  description: string
  progress: number
  duration: string
  nextSession: string
}

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
      <p className="mt-2 text-sm text-gray-500">{lesson.description}</p>
      
      <div className="mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-primary">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">
                {lesson.progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${lesson.progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>Duration: {lesson.duration}</span>
        <span>Next: {new Date(lesson.nextSession).toLocaleDateString()}</span>
      </div>
      
      <button className="mt-4 w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
        Continue Learning
      </button>
    </div>
  )
}
