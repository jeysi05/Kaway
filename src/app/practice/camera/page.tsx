"use client";

import { useState } from "react";

const targetSigns = ["Hello", "Thank you", "A", "Eat", "Help"];
const mockResults = ["Correct", "Almost correct", "Try again"];

export default function CameraPracticePage() {
  const [target, setTarget] = useState(targetSigns[0]);
  const [result, setResult] = useState<string | null>(null);

  function handlePractice() {
    const random = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(random);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Camera Practice</h1>
        <p className="text-slate-400 mb-8">
          Practice a sign and get mocked AI feedback.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <label className="block text-sm text-slate-400 mb-2">
            Choose a target sign
          </label>
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
          >
            {targetSigns.map((sign) => (
              <option key={sign} value={sign}>
                {sign}
              </option>
            ))}
          </select>

          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950 p-10 text-center mb-6">
            <p className="text-slate-500">[ Camera preview placeholder ]</p>
          </div>

          <p className="mb-4 text-lg">
            Target sign: <span className="font-semibold">{target}</span>
          </p>

          <button
            onClick={handlePractice}
            className="rounded-xl bg-white px-5 py-3 text-slate-950 font-medium hover:bg-slate-200"
          >
            Start Practice
          </button>

          {result && (
            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-5">
              <h2 className="text-xl font-semibold mb-2">Mock AI Result</h2>
              <p className="text-slate-300">{result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}