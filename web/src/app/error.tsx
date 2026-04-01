"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-full min-w-0 flex-col bg-[var(--bg)]">
      <main
        className="mx-auto flex min-h-[50vh] w-full max-w-lg flex-col items-center justify-center gap-4 px-6 py-16 text-center"
        role="alert"
        aria-live="polite"
      >
        <h1 className="font-[var(--font-heading)] text-xl font-bold text-[var(--primary)]">
          Something went wrong
        </h1>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {error.message || "An unexpected error occurred while loading this page."}
        </p>
        {error.digest ? (
          <p className="text-xs text-[var(--muted)]">Reference: {error.digest}</p>
        ) : null}
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-xs)] transition-[filter,transform] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.99]"
        >
          Try again
        </button>
      </main>
    </div>
  );
}
