import { mailerCardPadding } from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import type { InfoBoxData } from "@/content/mailer";

export function InfoBox({ data }: { data: InfoBoxData }) {
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className={mailerCardPadding}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-1 text-[12px] font-extrabold tracking-wide text-white shadow-[var(--shadow-xs)]">
            {data.title}
          </div>
          <div className="text-[12px] font-semibold text-[var(--muted)]">Alert</div>
        </div>

        <div className="space-y-2 text-[13px] leading-snug text-[var(--fg)]/90">
          {data.bullets.map((b, idx) => (
            <p
              key={`${data.id}-${idx}`}
              className={`text-pretty whitespace-pre-line ${
                idx === 0 ? "font-semibold text-[var(--fg)]" : "text-[var(--fg)]/88"
              }`}
            >
              {b}
            </p>
          ))}
        </div>

        <div className="mt-5 flex min-h-[48px] items-center justify-center rounded-[var(--radius-md)] bg-[linear-gradient(90deg,var(--accent),#a61220)] px-4 py-3 text-center text-[14px] font-extrabold tracking-wide text-white shadow-[var(--shadow-sm)] md:min-h-0 md:py-2 md:text-[13px]">
          {data.cta}
        </div>
      </div>
    </SectionBox>
  );
}

