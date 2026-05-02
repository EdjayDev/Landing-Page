"use client";

import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-100 dark:bg-black">
      <Navbar />

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        
        <div className="flex flex-col items-center animate-fadeIn">

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
              aria-label="Start Quiz"
              className="flex h-12 items-center justify-center rounded-full bg-black text-white px-6 font-medium transition-all duration-300 hover:scale-[1.02] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Start Quiz
            </Link>

            <Link
              href="/results"
              aria-label="View Scores"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium transition-all duration-300 hover:scale-[1.02] dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              View Scores
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-zinc-500 dark:text-zinc-400 w-full max-w-md">
            
            <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              <div className="font-medium text-black dark:text-white">
                Multiple Categories
              </div>
              <div className="text-xs mt-1">
                Explore various topics
              </div>
            </div>

            <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              <div className="font-medium text-black dark:text-white">
                Timed Questions
              </div>
              <div className="text-xs mt-1">
                Test speed and accuracy
              </div>
            </div>

            <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-center">
              <div className="font-medium text-black dark:text-white">
                Instant Results
              </div>
              <div className="text-xs mt-1">
                Get feedback immediately
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
