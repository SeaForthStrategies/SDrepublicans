import { mailerContainer } from "@/lib/mailer-layout";

const phoneBtn =
  "inline-flex min-h-[44px] items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--primary-2)] bg-white/90 px-5 py-2.5 text-center text-[13px] font-extrabold uppercase tracking-wide text-[var(--primary-2)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2cc3c] md:text-[12px]";

export function HeroElectionStrip({
  left,
  rightTop,
  rightBottom,
  quickContact,
}: {
  left: string;
  rightTop: string;
  rightBottom: string;
  quickContact: {
    phoneDisplay: string;
    phoneHref: string;
  };
}) {
  return (
    <div className="relative overflow-hidden border-y border-[#c9a826]/40 bg-[linear-gradient(105deg,#f7e9a8_0%,#f2cc3c_45%,#e8bc28_100%)] text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
      <div className={`${mailerContainer} py-4 md:py-5`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="min-w-0 flex-1 text-center md:max-w-[42rem] md:text-left">
            <p className="text-balance font-[var(--font-heading)] text-[clamp(1rem,2vw+0.5rem,1.25rem)] font-bold uppercase leading-snug tracking-[0.06em] text-[var(--primary-2)] md:text-[1.3rem]">
              {left}
            </p>
            <div className="mt-2 space-y-1 text-[12px] font-bold uppercase leading-snug tracking-wide text-[var(--fg)]/88 md:text-[13px]">
              <p>{rightTop}</p>
              <p>{rightBottom}</p>
            </div>
          </div>

          <div
            className="flex shrink-0 justify-center border-t border-[var(--fg)]/12 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0"
            role="group"
            aria-label="Ballot pickup phone"
          >
            <a href={quickContact.phoneHref} className={phoneBtn}>
              {quickContact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
