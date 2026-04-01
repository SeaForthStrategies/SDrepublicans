import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full min-w-0 flex-col bg-[var(--bg)]">
      <main className="mx-auto flex min-h-[50vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <h1 className="font-[var(--font-heading)] text-xl font-bold text-[var(--primary)]">
          Page not found
        </h1>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[var(--shadow-xs)] transition-[filter,transform] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.99]"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
