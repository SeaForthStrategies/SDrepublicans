import Link from "next/link";
import { mailerContainer } from "@/lib/mailer-layout";

export default function NotFound() {
  return (
    <div className="flex min-h-full min-w-0 flex-col bg-[var(--bg)]">
      <main
        className={`${mailerContainer} flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 py-16 text-center`}
      >
        <div className="flex w-full max-w-md flex-col items-center gap-4">
          <h1 className="font-[var(--font-heading)] text-[clamp(1.375rem,2vw+0.75rem,1.75rem)] font-bold text-[var(--primary)]">
            Page not found
          </h1>
          <p className="max-w-md text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] leading-relaxed text-[var(--muted)]">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex min-h-[48px] min-w-[12rem] items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-6 py-3 text-[clamp(0.9375rem,0.35vw+0.75rem,1.0625rem)] font-semibold text-white no-underline shadow-[var(--shadow-xs)] transition-[filter,transform] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] active:scale-[0.99]"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
