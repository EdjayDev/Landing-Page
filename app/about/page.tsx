import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link
        href="/"
        className="rounded bg-black px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
      >
        Home
      </Link>
      <main className="bg-blue-700 flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 dark:bg-black sm:items-start">
        <h1 className="bg-blue-800 max-w-xs text-3xl font-semibold leading-10 tracking-tight  text-black dark:text-zinc-50">
          This is the about page. I deployed this website using Vercel and I am
          using Next.js as the framework. I am also using Tailwind CSS for
          styling.
        </h1>
      </main>
    </div>
  );
}
