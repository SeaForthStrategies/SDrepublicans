import { mailerCardPadding } from "@/lib/mailer-layout";
import type { InfoBoxData } from "@/content/mailer";

export function InfoBox({ data }: { data: InfoBoxData }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[#8f0f1c]/30 bg-[linear-gradient(165deg,#0b1a3f_0%,#071027_55%,#050a14_100%)] shadow-[var(--shadow-md)]">
      <div className="relative">
        <div
          className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--accent)_0%,#8f0f1c_100%)]"
          aria-hidden
        />
        <div className={`${mailerCardPadding} flex flex-col gap-4 pl-5 md:pl-7`}>
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3">
            <span className="inline-flex items-center rounded-md bg-[var(--accent)] px-3 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.1em] text-white shadow-sm md:text-[13px]">
              {data.title}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
              Alert
            </span>
          </div>

          <div className="space-y-2.5 text-center text-[13px] leading-relaxed text-white/92 md:text-[14px] md:leading-relaxed">
            {data.bullets.map((b, idx) => (
              <p
                key={`${data.id}-${idx}`}
                className={`text-pretty whitespace-pre-line ${
                  idx === 0
                    ? "text-[14px] font-bold text-white md:text-[15px]"
                    : "font-medium text-white/85"
                }`}
              >
                {b}
              </p>
            ))}
          </div>

          <div className="flex min-h-[44px] items-center justify-center rounded-[var(--radius-md)] border border-white/12 bg-[linear-gradient(90deg,var(--accent),#9e1422)] px-4 py-2.5 text-center text-[13px] font-extrabold uppercase tracking-[0.06em] text-white shadow-inner md:min-h-0 md:py-2 md:text-[14px]">
            {data.cta}
          </div>
        </div>
      </div>
    </div>
  );
}
