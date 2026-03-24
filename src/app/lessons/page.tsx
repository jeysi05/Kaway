import Link from "next/link";

const lessons = [
  {
    id: 1,
    slug: "alphabet-basics",
    title: "Alphabet Basics",
    description: "Learn the first few hand signs in the Filipino Sign Language alphabet.",
    level: "Beginner",
  },
  {
    id: 2,
    slug: "greetings",
    title: "Greetings",
    description: "Practice common greetings used in daily conversation.",
    level: "Beginner",
  },
  {
    id: 3,
    slug: "daily-words",
    title: "Daily Words",
    description: "Learn useful signs for everyday communication.",
    level: "Beginner",
  },
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Lessons</h1>
        <p className="text-slate-400 mb-8">
          Choose a lesson to start learning FSL.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.slug}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700 hover:bg-slate-900/80"
            >
              <p className="text-sm text-slate-400 mb-2">{lesson.level}</p>
              <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
              <p className="text-slate-300">{lesson.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}