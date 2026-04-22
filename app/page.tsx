"use client";

import Link from "next/link";
import navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-100 font-sans dark:bg-black">
      {navbar()}

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-6 py-20 bg-white dark:bg-black text-center sm:text-left">
        
        <div className="animate-[fadeIn_0.6s_ease-out] flex flex-col items-center sm:items-start">

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Test Your Knowledge
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-md">
            Challenge yourself with a set of curated questions. Track your score,
            improve your knowledge, and see how far you can go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            
            <Link
              href="/quiz"
              className="flex h-12 items-center justify-center rounded-full bg-black text-white px-6 font-medium transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.03] hover:-translate-y-0.5 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Start Quiz
            </Link>

            <Link
              href="/results"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.03] hover:-translate-y-0.5 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              View Scores
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-500 dark:text-zinc-400 w-full max-w-md">
            <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              Multiple Categories
            </div>
            <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              Timed Questions
            </div>
            <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              Instant Results
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
