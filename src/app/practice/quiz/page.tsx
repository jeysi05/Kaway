"use client";

import { useState } from "react";

const questions = [
  {
    question: "Which lesson would most likely include the sign 'Hello'?",
    options: ["Alphabet Basics", "Greetings", "Daily Words"],
    answer: "Greetings",
  },
  {
    question: "Which of these is part of Alphabet Basics?",
    options: ["School", "A", "Thank you"],
    answer: "A",
  },
  {
    question: "Which word is found in Daily Words?",
    options: ["Eat", "Good morning", "B"],
    answer: "Eat",
  },
];

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleAnswer(option: string) {
    if (selected) return;
    setSelected(option);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Complete</h1>
          <p className="text-xl text-slate-300 mb-6">
            Your score: {score} / {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="rounded-xl bg-white px-5 py-3 text-slate-950 font-medium hover:bg-slate-200"
          >
            Restart Quiz
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Quiz</h1>
        <p className="text-slate-400 mb-8">
          Test your understanding of FSL lessons.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm text-slate-400 mb-4">
            Question {currentIndex + 1} of {questions.length}
          </p>

          <h2 className="text-2xl font-semibold mb-6">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isCorrect = selected && option === currentQuestion.answer;
              const isWrong = selected === option && option !== currentQuestion.answer;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`block w-full rounded-xl border px-4 py-3 text-left transition ${
                    isCorrect
                      ? "border-green-500 bg-green-950"
                      : isWrong
                      ? "border-red-500 bg-red-950"
                      : "border-slate-700 bg-slate-950 hover:bg-slate-800"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-6">
              <button
                onClick={handleNext}
                className="rounded-xl bg-white px-5 py-3 text-slate-950 font-medium hover:bg-slate-200"
              >
                {currentIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}