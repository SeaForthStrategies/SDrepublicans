import Image from "next/image";
import {
  mailerHeaderInner,
  mailerHeroLogoBox,
  mailerHeroTitle,
  mailerHeroUnified,
  mailerHeroUnifiedSub,
  mailerLogoSizes,
} from "@/lib/mailer-layout";

function HeroLogo({
  logoSrc,
  decorative,
  priority,
}: {
  logoSrc: string;
  decorative: boolean;
  priority: boolean;
}) {
  return (
    <div
      className={`${mailerHeroLogoBox} h-[52px] w-[90px] sm:h-[58px] sm:w-[100px] md:h-[64px] md:w-[110px]`}
    >
      <Image
        src={logoSrc}
        alt={decorative ? "" : "Republican elephant"}
        fill
        sizes={mailerLogoSizes}
        className="object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
        priority={priority}
        aria-hidden={decorative}
      />
    </div>
  );
}

export function HeaderBanner({
  logoSrc,
  headline,
  titleTop = "REPUBLICAN",
  titleBottom = "LEADERSHIP",
  primaryWebsite,
}: {
  logoSrc: string;
  headline: string;
  titleTop?: string;
  titleBottom?: string;
  primaryWebsite?: string;
}) {
  const headingFont = { fontFamily: "var(--font-heading)" } as const;

  return (
    <header className="relative overflow-hidden border-b border-white/[0.1] bg-[var(--primary-2)] pt-[env(safe-area-inset-top)] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,transparent_42%)]"
        aria-hidden
      />
      <div className={`${mailerHeaderInner} relative pb-7 md:pb-10`}>
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10 lg:gap-12">
          <div className="shrink-0 md:pt-0.5">
            <HeroLogo logoSrc={logoSrc} decorative={false} priority />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center md:items-start md:text-left md:gap-3.5">
            <div className="w-full max-w-xl">
              <p
                className={`${mailerHeroUnified} text-center text-white md:text-left`}
                style={headingFont}
              >
                {titleTop}
              </p>
              <p
                className={`${mailerHeroUnified} -mt-0.5 text-center text-white/95 md:-mt-1 md:text-left`}
                style={headingFont}
              >
                {titleBottom}
              </p>
              <div
                className="mx-auto mt-3 h-px w-[min(12rem,55vw)] rounded-full bg-[linear-gradient(90deg,transparent,rgba(207,31,45,0.9),rgba(242,204,60,0.85),rgba(255,255,255,0.35),transparent)] opacity-95 md:mx-0 md:w-56"
                aria-hidden
              />
            </div>

            <p
              className={`${mailerHeroTitle} max-w-xl text-center text-white md:text-left`}
              style={headingFont}
            >
              {headline}
            </p>

            {primaryWebsite ? (
              <p
                className={`${mailerHeroUnifiedSub} max-w-full break-words text-center text-white/60 md:text-left`}
                style={headingFont}
              >
                {primaryWebsite}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
