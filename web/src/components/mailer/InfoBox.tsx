import { mailerCardPadding } from "@/lib/mailer-layout";
import type { InfoBoxData } from "@/content/mailer";

export function InfoBox({ data }: { data: InfoBoxData }) {
  return (
    <div
      className={`h-auto w-full overflow-visible rounded-[var(--radius-lg)] border border-[var(--primary)]/38 bg-[linear-gradient(165deg,#0a2048_0%,#061228_55%,#03060e_100%)] shadow-[var(--shadow-md)] ${mailerCardPadding}`}
    >
      <div className="flex min-w-0 gap-4 sm:gap-5 md:gap-6">
        <div
          className="w-1 shrink-0 self-stretch rounded-full bg-[linear-gradient(180deg,var(--primary)_0%,var(--primary-2)_100%)]"
          aria-hidden
        />
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center rounded-md bg-[var(--accent)] px-3 py-2 text-[clamp(0.8125rem,0.35vw+0.6rem,0.9375rem)] font-extrabold uppercase tracking-[0.08em] text-white shadow-sm sm:px-3.5">
              {data.title}
            </span>
            <span className="text-[clamp(0.6875rem,0.25vw+0.5rem,0.75rem)] font-bold uppercase tracking-[0.14em] text-white/50 sm:tracking-[0.16em]">
              Alert
            </span>
          </div>

          <div className="max-w-prose space-y-3 text-left text-[clamp(0.9375rem,0.45vw+0.72rem,1.0625rem)] leading-relaxed text-white/92 md:space-y-3.5 md:leading-[1.65]">
            {data.bullets.map((b, idx) => (
              <p
                key={`${data.id}-${idx}`}
                className={`text-pretty whitespace-pre-line ${
                  idx === 0
                    ? "text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] font-bold text-white"
                    : "font-medium text-white/85"
                }`}
              >
                {b}
              </p>
            ))}
          </div>

          <div className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-[var(--radius-md)] border border-white/14 bg-[linear-gradient(90deg,var(--accent),var(--accent-deep))] px-4 py-3 text-center text-[clamp(0.9375rem,0.4vw+0.72rem,1.0625rem)] font-extrabold uppercase tracking-[0.05em] text-white shadow-inner sm:mt-7 sm:min-h-[44px] md:py-2.5">
            {data.cta}
          </div>
        </div>
      </div>
    </div>
  );
}
