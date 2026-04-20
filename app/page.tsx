import Link from "next/link";
import navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-100 font-sans dark:bg-black">
      {navbar()}

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-6 py-20 bg-white dark:bg-black text-center sm:text-left">
        
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
          Test Your Knowledge
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-md">
          Challenge yourself with a set of curated questions. Track your score,
          improve your knowledge, and see how far you can go.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          
          {/* Start Quiz */}
          <Link
            href="/quiz"
            className="flex h-12 items-center justify-center rounded-full bg-black text-white px-6 font-medium transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Start Quiz
          </Link>

          {/* View Scores */}
          <Link
            href="/results"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            View Scores
          </Link>
        </div>

        {/* Extra info */}
        <div className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
          <p>• Multiple categories</p>
          <p>• Timed questions</p>
          <p>• Instant results</p>
        </div>
      </main>
    </div>
  );
}
