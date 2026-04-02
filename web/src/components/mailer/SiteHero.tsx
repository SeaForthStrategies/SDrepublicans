import Image from "next/image";
import Link from "next/link";
import {
  mailerCardPadding,
  mailerChairmanSizes,
  mailerContainer,
} from "@/lib/mailer-layout";
import type { MailerHeader, MailerPageData } from "@/content/mailer";

const heroPillBase =
  "inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 py-2.5 text-center text-[0.875rem] font-semibold tracking-wide shadow-[0_4px_18px_rgba(8,31,69,0.2)] transition-[color,background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_24px_rgba(8,31,69,0.22)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary-2)] sm:min-h-[46px] sm:px-7 sm:text-[0.9375rem] motion-reduce:transition-colors motion-reduce:hover:translate-y-0";

const heroPillNavy = `${heroPillBase} text-[var(--primary-2)]`;
const heroPillAccent = `${heroPillBase} text-[var(--accent)]`;

const phoneBtn =
  "inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--primary-2)] bg-white px-6 py-3.5 text-center text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] font-extrabold uppercase tracking-wide text-[var(--primary-2)] shadow-[var(--shadow-xs)] transition-[color,background-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--surface-2)] hover:shadow-[var(--shadow-sm)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-colors motion-reduce:hover:translate-y-0 sm:min-h-[50px] md:px-7";

const heroLogoSizes =
  "(max-width: 639px) 80px, (max-width: 1023px) 88px, 96px";

type SiteHeroProps = {
  header: MailerHeader;
  electionBanner: MailerPageData["electionBanner"];
  quickContact: { phoneDisplay: string; phoneHref: string };
};

/**
 * Hero: serif masthead on a patriotic navy field, pill CTAs; chairman + election strip below.
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
      id="top"
      className="relative flex w-full flex-col items-center overflow-x-clip scroll-mt-0"
      aria-label="San Diego Republican Leadership"
    >
      <div className="relative w-full min-w-0 overflow-x-clip text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(162deg,#c42d3e_0%,#a61f30_18%,#7a223c_34%,#4a3058_50%,#254878_68%,#143d7a_82%,#0c2852_92%,#051428_100%)]"
          aria-hidden
        />
        <div
          className="site-hero-ambient-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_50%_-8%,rgba(255,255,255,0.13)_0%,transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_58%_48%_at_12%_12%,rgba(255,160,160,0.12)_0%,transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_100%_100%,rgba(8,31,69,0.4)_0%,transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_0%_100%,rgba(0,0,0,0.14)_0%,transparent_52%)]"
          aria-hidden
        />
        {/* Long soft fade into page bg — avoids a hard cut at the section edge */}
        <div
          className="site-hero-divider-enter pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(52%,13rem)] bg-[linear-gradient(to_top,#f4f6fa_0%,rgba(244,246,250,0.92)_12%,rgba(220,228,242,0.55)_32%,rgba(100,130,180,0.2)_58%,transparent_100%)] sm:h-[min(48%,15rem)] md:h-[min(42%,17rem)]"
          aria-hidden
        />

        <div
          className={`${mailerContainer} relative z-10 flex justify-center pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(5.5rem,14%)] md:pb-[max(6.5rem,12%)] md:pt-[max(2rem,env(safe-area-inset-top))]`}
        >
          <div className="flex w-full min-w-0 max-w-[40rem] flex-col items-center gap-8 text-center md:max-w-[44rem] md:gap-10">
            <h1 className="site-hero-enter w-full min-w-0 px-2 font-[var(--font-hero-serif)] text-[clamp(1.625rem,5vw+0.5rem,2.75rem)] font-bold uppercase leading-[1.08] tracking-[0.04em] text-balance text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] sm:tracking-[0.045em] md:tracking-[0.05em]">
              {headline}
            </h1>

            <div className="site-hero-enter site-hero-enter-delay-1 flex w-full min-w-0 flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5 md:gap-6">
              <div className="relative shrink-0 rounded-2xl bg-white/14 p-2.5 ring-[3px] ring-white/45 ring-offset-[3px] ring-offset-transparent shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:p-3 md:p-3.5">
                <div className="relative h-[4rem] w-[4rem] sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20">
                  <Image
                    src={brandLeft.logo.src}
                    alt={brandLeft.logo.alt}
                    fill
                    sizes={heroLogoSizes}
                    className="object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] [filter:brightness(1.08)_contrast(1.05)]"
                    priority
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
                <p className="w-full max-w-[22rem] text-pretty font-[var(--font-hero-serif)] text-[clamp(0.8125rem,2vw+0.5rem,1rem)] font-bold uppercase leading-snug tracking-[0.18em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] sm:max-w-none sm:tracking-[0.2em] md:text-[1.0625rem] md:tracking-[0.22em]">
                  {brandLeft.titleTop}
                </p>
                <p className="w-full max-w-[22rem] text-pretty font-[var(--font-hero-serif)] text-[clamp(1.25rem,4vw+0.5rem,2rem)] font-normal italic leading-tight tracking-[0.06em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] sm:max-w-none md:text-[2.125rem] md:tracking-[0.05em]">
                  {brandLeft.titleBottom}
                </p>
              </div>
            </div>

            <div className="site-hero-ctas-enter flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link href="#vote" className={heroPillNavy}>
                Election
              </Link>
              <a href={quickContact.phoneHref} className={heroPillAccent}>
                {quickContact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {chairman ? (
        <div
          id="chairman"
          className="site-hero-below-enter relative z-[1] -mt-10 w-full scroll-mt-24 sm:-mt-12 md:-mt-14"
        >
          <div className={`${mailerContainer} flex w-full justify-center`}>
            <div
              className={`mx-auto w-full max-w-3xl rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] ${mailerCardPadding}`}
            >
              <div className="flex min-h-0 min-w-0 flex-row items-stretch gap-4 text-left sm:gap-5 md:gap-6">
                <div className="relative w-[88px] min-h-[88px] shrink-0 self-stretch overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:w-[100px] sm:min-h-[100px] md:w-[104px] md:min-h-[104px]">
                  <Image
                    src={chairman.image.src}
                    alt={chairman.image.alt}
                    fill
                    className="object-cover object-top"
                    sizes={mailerChairmanSizes}
                    priority
                  />
                </div>
                <div className="min-w-0 flex-1">
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
        id="vote"
        className={`site-hero-below-enter-2 w-full scroll-mt-24 ${chairman ? "mt-7 md:mt-9" : "-mt-8 sm:-mt-10 md:-mt-11"}`}
      >
        <div className="relative w-full overflow-hidden border-y border-[var(--primary)]/16 bg-[linear-gradient(165deg,#eef2f9_0%,#ffffff_42%,#e8eef7_100%)] text-[var(--fg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
          <div
            className={`${mailerContainer} flex w-full flex-col items-center py-6 md:py-7`}
          >
            <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-5 text-center sm:max-w-xl md:max-w-2xl">
              <div className="w-full space-y-3">
                <p
                  className="w-full rounded-xl border border-[var(--primary)]/22 bg-white/92 px-4 py-3 font-[var(--font-heading)] text-[clamp(1.125rem,3vw+0.5rem,1.5rem)] font-bold uppercase leading-snug tracking-[0.06em] text-[var(--primary-2)] shadow-[0_0_28px_rgba(20,61,122,0.26),0_4px_22px_rgba(8,31,69,0.07)] sm:px-5 sm:py-3.5"
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
