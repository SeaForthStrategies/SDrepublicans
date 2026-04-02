"use client";

import { mailerContainer } from "@/lib/mailer-layout";

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
        className={`${mailerContainer} flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 py-16 text-center`}
        role="alert"
        aria-live="polite"
      >
        <div className="flex w-full max-w-md flex-col items-center gap-4">
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
            className="inline-flex min-h-[44px] min-w-[12rem] items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-xs)] transition-[filter,transform] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.99]"
          >
            Try again
          </button>
        </div>
      </main>
    </div>
  );
}
