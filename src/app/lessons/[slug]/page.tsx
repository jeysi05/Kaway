import Link from "next/link";
import { notFound } from "next/navigation";

const lessons = {
  "alphabet-basics": {
    title: "Alphabet Basics",
    level: "Beginner",
    description: "Learn the first few hand signs in the Filipino Sign Language alphabet.",
    signs: ["A", "B", "C", "D", "E"],
    tip: "Focus on finger shape and hand position for each letter.",
  },
  greetings: {
    title: "Greetings",
    level: "Beginner",
    description: "Practice common greetings used in daily conversation.",
    signs: ["Hello", "Good morning", "Thank you", "How are you?"],
    tip: "Practice these signs slowly, then repeat them as a short conversation.",
  },
  "daily-words": {
    title: "Daily Words",
    level: "Beginner",
    description: "Learn useful signs for everyday communication.",
    signs: ["Eat", "Drink", "School", "Home", "Help"],
    tip: "Use each word in a short daily-life scenario to remember it better.",
  },
} as const;

type LessonSlug = keyof typeof lessons;

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons[slug as LessonSlug];

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/lessons"
          className="inline-block mb-6 text-sm text-slate-400 hover:text-white"
        >
          ← Back to Lessons
        </Link>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm text-slate-400 mb-2">{lesson.level}</p>
          <h1 className="text-3xl font-bold mb-3">{lesson.title}</h1>
          <p className="text-slate-300 mb-6">{lesson.description}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Signs in this lesson</h2>
            <div className="flex flex-wrap gap-3">
              {lesson.signs.map((sign) => (
                <span
                  key={sign}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {sign}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <h3 className="text-lg font-semibold mb-2">Practice Tip</h3>
            <p className="text-slate-300">{lesson.tip}</p>
          </div>
        </div>
      </div>
    </main>
  );
}