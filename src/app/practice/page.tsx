import Link from "next/link";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Practice</h1>
        <p className="text-slate-400 mb-8">
          Review signs using flashcards, quizzes, and camera-based mock practice.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/practice/flashcards"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold mb-2">Flashcards</h2>
            <p className="text-slate-300">
              Review signs and meanings one by one.
            </p>
          </Link>

          <Link
            href="/practice/quiz"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold mb-2">Quiz</h2>
            <p className="text-slate-300">
              Test your understanding of signs and phrases.
            </p>
          </Link>

          <Link
            href="/practice/camera"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold mb-2">Camera Practice</h2>
            <p className="text-slate-300">
              Try a mocked AI-assisted sign practice flow.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}