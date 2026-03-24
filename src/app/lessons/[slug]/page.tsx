import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons.find((item) => item.slug === slug);

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