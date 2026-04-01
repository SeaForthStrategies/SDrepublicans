import { mailerContainer } from "@/lib/mailer-layout";

export function ElectionBanner({
  left,
  rightTop,
  rightBottom,
}: {
  left: string;
  rightTop: string;
  rightBottom: string;
}) {
  return (
    <div className="election-banner-wrap relative overflow-hidden border-t border-black/[0.06] bg-[linear-gradient(90deg,rgba(242,204,60,0.96),rgba(242,204,60,0.78))] text-[var(--fg)] shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)]">
      <div className={`relative z-[1] ${mailerContainer} py-4 md:py-5`}>
        <div className="flex flex-col items-center gap-3.5 text-center md:flex-row md:items-center md:justify-center md:gap-10">
          <div
            className="max-w-[min(100%,28ch)] text-balance font-[var(--font-heading)] text-[17px] leading-tight tracking-[0.06em] sm:text-[18px] md:max-w-none md:text-[22px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {left}
          </div>
          <div className="hidden h-10 w-px shrink-0 bg-[var(--fg)]/15 md:block" aria-hidden />
          <div className="flex flex-col gap-1.5 text-[13px] font-extrabold leading-snug tracking-wide md:items-center md:text-center">
            <div>{rightTop}</div>
            <div>{rightBottom}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

