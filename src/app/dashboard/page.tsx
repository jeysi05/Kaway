export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-slate-400 mb-8">
          Track your Filipino Sign Language learning progress.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Lessons Started</p>
            <h2 className="mt-2 text-3xl font-bold">4</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Lessons Completed</p>
            <h2 className="mt-2 text-3xl font-bold">2</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Current Streak</p>
            <h2 className="mt-2 text-3xl font-bold">3 days</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Practice Score</p>
            <h2 className="mt-2 text-3xl font-bold">82%</h2>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold mb-3">Recent Activity</h3>
          <ul className="space-y-3 text-slate-300">
            <li>Completed lesson: Greetings</li>
            <li>Practiced flashcards: Alphabet A–E</li>
            <li>Took quiz: Daily Signs Basics</li>
          </ul>
        </div>
      </div>
    </main>
  );
}