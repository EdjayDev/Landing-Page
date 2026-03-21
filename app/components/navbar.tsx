import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row p-8 items-center justify-center gap-1 bg-zinc-50 font-sans dark:bg-black">
      <img src="/logo.png" alt="Logo" className="h-10 w-10" />
      <Link
        href="../"
        className="rounded bg-black px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="rounded bg-black px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
      >
        About
      </Link>
    </div>
  );
}
