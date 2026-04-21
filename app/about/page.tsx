import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6 py-12">
      <div className="w-full max-w-5xl flex justify-start mb-8">
        <Link
          href="/"
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          ← Home
        </Link>
      </div>

      <main className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-10 sm:p-14 border border-zinc-200 dark:border-zinc-800">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            About This Project
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-xl">
            A simple web application built with modern tools and deployed for
            scalability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">Framework</h2>
            <p className="text-sm opacity-90">
              Built using Next.js with file-based routing and optimized
              performance.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">Styling</h2>
            <p className="text-sm opacity-90">
              Styled using Tailwind CSS for rapid UI development and
              responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">Deployment</h2>
            <p className="text-sm opacity-90">
              Deployed seamlessly on Vercel with automatic CI/CD integration.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">Goal</h2>
            <p className="text-sm opacity-90">
              Showcase a clean, scalable structure using modern frontend
              practices.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
