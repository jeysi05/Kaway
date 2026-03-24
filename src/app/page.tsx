import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">KaWay FSL</h1>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl">
          Learn and practice Filipino Sign Language through guided lessons,
          quizzes, and AI-assisted practice.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/dashboard"
            className="rounded-xl bg-white px-5 py-3 text-slate-950 font-medium hover:bg-slate-200"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/lessons"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-900"
          >
            View Lessons
          </Link>
          <Link
            href="/practice"
            className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-900"
          >
            Start Practice
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">Lessons</h2>
            <p className="text-slate-400">
              Learn beginner-friendly FSL signs, phrases, and categories.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">Practice</h2>
            <p className="text-slate-400">
              Strengthen your skills with quizzes and flashcards.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold mb-2">AI Feedback</h2>
            <p className="text-slate-400">
              Get mocked AI-assisted feedback for selected signs and phrases.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}