import Image from "next/image";
import {
  mailerCardPadding,
  mailerChairmanSizes,
  mailerContainer,
} from "@/lib/mailer-layout";
import type { MailerHeader, MailerPageData } from "@/content/mailer";

const phoneBtn =
  "inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--primary-2)] bg-white px-6 py-3.5 text-center text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] font-extrabold uppercase tracking-wide text-[var(--primary-2)] shadow-[var(--shadow-xs)] transition-colors hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-[50px] md:px-7";

const heroLogoSizes =
  "(max-width: 639px) 88px, (max-width: 767px) 100px, 120px";

/** Matches “OFFICIAL ENDORSEMENT GUIDE” — tuned so long first line wraps cleanly on narrow phones */
const heroHeadlineScale =
  "font-[var(--font-heading)] text-[clamp(1rem,4.25vw+0.45rem,2.5rem)] font-extrabold uppercase leading-[1.06] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]";

type SiteHeroProps = {
  header: MailerHeader;
  electionBanner: MailerPageData["electionBanner"];
  quickContact: { phoneDisplay: string; phoneHref: string };
};

/**
 * Masthead matches print-style hero: logo + brand lines + red rule, large headline;
 * optional chairman card; election strip + phone.
 */
export function SiteHero({
  header,
  electionBanner,
  quickContact,
}: SiteHeroProps) {
  const { brandLeft, headline, chairman } = header;
  const { left, rightTop, rightBottom } = electionBanner;

  return (
    <section
      className="relative flex w-full flex-col items-center overflow-x-clip"
      aria-label="San Diego Republican Leadership"
    >
      <div className="relative w-full text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_100%_at_50%_42%,#1c4a9c_0%,#0f3274_38%,#071a42_72%,#040d24_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <div
          className={`${mailerContainer} relative z-10 flex w-full flex-col items-center pb-12 pt-[max(1.25rem,env(safe-area-inset-top))] md:pb-16 md:pt-[max(1.75rem,env(safe-area-inset-top))]`}
        >
          <div className="flex w-full flex-col items-center text-center">
            <div className="flex w-full max-w-full flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6">
              <div className="relative mx-auto h-[4.5rem] w-[4.5rem] shrink-0 sm:h-[5.25rem] sm:w-[5.25rem] md:h-28 md:w-28">
                <Image
                  src={brandLeft.logo.src}
                  alt={brandLeft.logo.alt}
                  fill
                  sizes={heroLogoSizes}
                  className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
              <div className="mx-auto w-full min-w-0 max-w-full text-center sm:max-w-2xl md:max-w-3xl">
                <p
                  className={`${heroHeadlineScale} text-pretty tracking-[0.02em] sm:tracking-[0.03em] md:tracking-[0.035em]`}
                >
                  {brandLeft.titleTop}
                </p>
                <div className="mt-2 flex min-w-0 items-center justify-center gap-2 sm:mt-2.5 sm:gap-2.5 md:mt-3">
                  <span
                    className={`${heroHeadlineScale} shrink-0 tracking-[0.1em] sm:tracking-[0.16em] md:tracking-[0.2em] lg:tracking-[0.24em]`}
                  >
                    {brandLeft.titleBottom}
                  </span>
                  <span
                    className="h-0.5 w-14 shrink-0 bg-[var(--accent)] sm:w-16 md:h-1 md:w-24 lg:w-28"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            <h1
              className={`${heroHeadlineScale} mx-auto mt-5 w-full max-w-4xl text-balance text-center tracking-[0.02em] sm:mt-6 sm:tracking-[0.03em] md:mt-7 md:tracking-[0.035em] lg:tracking-[0.04em]`}
            >
              {headline}
            </h1>
          </div>
        </div>
      </div>

      {chairman ? (
        <div className="relative z-[1] -mt-5 w-full md:-mt-7">
          <div className={`${mailerContainer} flex w-full justify-center`}>
            <div
              className={`mx-auto w-full max-w-3xl rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] ${mailerCardPadding}`}
            >
              <div className="flex min-h-0 min-w-0 flex-row items-start gap-4 text-left sm:gap-5 md:gap-6">
                <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:h-[100px] sm:w-[100px] md:h-[104px] md:w-[104px]">
                  <Image
                    src={chairman.image.src}
                    alt={chairman.image.alt}
                    fill
                    className="object-cover object-[50%_22%]"
                    sizes={mailerChairmanSizes}
                    priority
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-pretty whitespace-pre-line text-[clamp(1rem,0.55vw+0.8rem,1.1875rem)] font-medium italic leading-relaxed text-[var(--fg)]/95 md:leading-[1.65]">
                    {chairman.quote}
                  </p>
                  <p className="mt-3 whitespace-pre-line text-[clamp(0.875rem,0.4vw+0.65rem,1rem)] font-extrabold uppercase tracking-[0.1em] text-[var(--primary)] md:tracking-[0.12em]">
                    {chairman.byline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`w-full ${chairman ? "mt-7 md:mt-9" : "mt-0"}`}
      >
        <div className="relative w-full overflow-hidden border-y border-[var(--primary)]/14 bg-[linear-gradient(165deg,#f4f7fd_0%,#ffffff_42%,#eef3fb_100%)] text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div
            className={`${mailerContainer} flex w-full flex-col items-center py-6 md:py-7`}
          >
            <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-5 text-center sm:max-w-xl md:max-w-2xl">
              <div className="w-full space-y-3">
                <p
                  className="w-full rounded-xl border border-[var(--primary)]/20 bg-white/90 px-4 py-3 font-[var(--font-heading)] text-[clamp(1.125rem,3vw+0.5rem,1.5rem)] font-bold uppercase leading-snug tracking-[0.06em] text-[var(--primary-2)] shadow-[0_0_24px_rgba(18,58,138,0.35),0_4px_24px_rgba(11,42,102,0.08)] sm:px-5 sm:py-3.5"
                >
                  {left}
                </p>
                <div className="space-y-1.5 text-[0.9375rem] font-bold uppercase leading-snug tracking-wide text-[var(--fg)]/90 sm:text-[1rem]">
                  <p>{rightTop}</p>
                  <p>{rightBottom}</p>
                </div>
              </div>
              <div
                className="w-full max-w-sm border-t border-[var(--fg)]/15 pt-4"
                role="group"
                aria-label="Ballot pickup phone"
              >
                <a href={quickContact.phoneHref} className={`${phoneBtn} w-full`}>
                  {quickContact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
