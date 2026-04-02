import Image from "next/image";
import {
  mailerCardPadding,
  mailerChairmanSizes,
  mailerContainer,
} from "@/lib/mailer-layout";
import type { MailerHeader, MailerPageData } from "@/content/mailer";

const phoneBtn =
  "inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-md)] border-2 border-[var(--primary-2)] bg-white px-6 py-3.5 text-center text-[clamp(1rem,0.5vw+0.75rem,1.125rem)] font-extrabold uppercase tracking-wide text-[var(--primary-2)] shadow-[var(--shadow-xs)] transition-colors hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-[50px] md:px-7";

const heroSideElephantSizes =
  "(max-width: 639px) 88px, (max-width: 767px) 96px, 108px";

function HeroElephantFlank({
  logoSrc,
  priority,
  stagger,
}: {
  logoSrc: string;
  priority?: boolean;
  stagger?: "delay";
}) {
  return (
    <div
      className={`relative h-11 w-[4rem] shrink-0 sm:h-12 sm:w-[4.5rem] md:h-[3.25rem] md:w-[5rem] hero-elephant-animate${stagger === "delay" ? " hero-elephant-animate-delay" : ""}`}
    >
      <Image
        src={logoSrc}
        alt=""
        fill
        sizes={heroSideElephantSizes}
        className="object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        priority={priority}
        aria-hidden
      />
    </div>
  );
}

type SiteHeroProps = {
  header: MailerHeader;
  electionBanner: MailerPageData["electionBanner"];
  quickContact: { phoneDisplay: string; phoneHref: string };
};

/**
 * Single above-the-fold band: masthead, optional chairman message, election + phone.
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
          className="pointer-events-none absolute inset-0 bg-[url('/mailer/brand/us-flag-hero.svg')] bg-cover bg-center bg-no-repeat"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[rgba(11,42,102,0.88)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(242,204,60,0.07),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden
        />

        <div
          className={`${mailerContainer} relative z-10 flex justify-center pb-12 pt-[max(1.25rem,env(safe-area-inset-top))] md:pb-16 md:pt-[max(1.75rem,env(safe-area-inset-top))]`}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:max-w-4xl">
            <p className="w-full font-[var(--font-heading)] text-[clamp(2rem,5vw+0.75rem,3.75rem)] font-extrabold uppercase leading-[0.95] tracking-[0.05em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              {brandLeft.titleTop}
            </p>
            <div className="mt-4 flex w-full flex-nowrap items-center justify-center gap-2 sm:mt-5 sm:gap-4 md:gap-5">
              <HeroElephantFlank logoSrc={brandLeft.logo.src} priority />
              <p className="min-w-0 font-[var(--font-leadership)] text-[clamp(2.25rem,5vw+0.5rem,3.5rem)] font-semibold italic leading-[1.05] tracking-[0.02em] text-[var(--accent)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                {brandLeft.titleBottom}
              </p>
              <HeroElephantFlank logoSrc={brandLeft.logo.src} stagger="delay" />
            </div>
            <h1 className="mt-7 w-full max-w-2xl text-balance font-[var(--font-heading)] text-[clamp(1rem,1.2vw+0.65rem,1.25rem)] font-bold uppercase leading-snug tracking-[0.14em] text-white/90 sm:max-w-3xl sm:tracking-[0.16em]">
              {headline}
            </h1>
          </div>
        </div>
      </div>

      {chairman ? (
        <div className="relative z-[1] -mt-5 flex w-full justify-center md:-mt-7">
          <div className={`${mailerContainer} flex justify-center`}>
            <div
              className={`w-full max-w-3xl rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] ${mailerCardPadding}`}
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
          <div className={`${mailerContainer} flex justify-center py-6 md:py-7`}>
            <div className="flex w-full max-w-lg flex-col items-center gap-5 text-center sm:max-w-xl md:max-w-2xl">
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
