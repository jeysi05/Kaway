"use client";

import { useState } from "react";
import { lessons } from "@/data/lessons";

const cards = lessons.flatMap((lesson) =>
  lesson.signs.map((sign) => ({
    lesson: lesson.title,
    sign,
  }))
);

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cards[index];

  function handleNext() {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % cards.length);
  }

  function handlePrevious() {
    setShowAnswer(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Flashcards</h1>
        <p className="text-slate-400 mb-8">
          Review one sign at a time and test your memory.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <p className="text-sm text-slate-400 mb-3">
            Lesson: {currentCard.lesson}
          </p>

          <h2 className="text-4xl font-bold mb-6">What is this sign?</h2>

          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-10 mb-6">
            <p className="text-slate-500">[ Sign demo placeholder ]</p>
          </div>

          {showAnswer ? (
            <p className="text-2xl font-semibold text-white mb-6">
              {currentCard.sign}
            </p>
          ) : (
            <p className="text-slate-400 mb-6">Click reveal to see the answer.</p>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handlePrevious}
              className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              onClick={() => setShowAnswer(true)}
              className="rounded-xl bg-white px-4 py-2 text-slate-950 font-medium hover:bg-slate-200"
            >
              Reveal Answer
            </button>
            <button
              onClick={handleNext}
              className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}