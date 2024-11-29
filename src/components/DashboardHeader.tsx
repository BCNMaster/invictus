import Link from 'next/link'

export function DashboardHeader() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Track your progress and upcoming lessons</p>
          </div>
          <div>
            <Link
              href="/dashboard/new-lesson"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              New Lesson Plan
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
