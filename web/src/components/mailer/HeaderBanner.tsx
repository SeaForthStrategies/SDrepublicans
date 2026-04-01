import Image from "next/image";
import {
  mailerHeaderInner,
  mailerHeroAccentBar,
  mailerHeroBrandBottom,
  mailerHeroBrandTop,
  mailerHeroHeadlineWide,
  mailerHeroLogoBox,
  mailerHeroWebsite,
  mailerLogoSizes,
} from "@/lib/mailer-layout";

export function HeaderBanner({
  logoSrc,
  headline,
  primaryWebsite,
}: {
  logoSrc: string;
  headline: string;
  primaryWebsite?: string;
}) {
  return (
    <header className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#050a14_0%,var(--primary-2)_38%,#0c1838_72%,#071027_100%)]" />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-[min(240px,55vw)] w-[min(240px,55vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(207,31,45,0.12),transparent_72%)]"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className={`${mailerHeaderInner} pb-6 md:pb-8`}>
        <div className="flex min-w-0 flex-col items-center gap-6 text-center md:gap-7">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6">
            <div className={mailerHeroLogoBox}>
              <Image
                src={logoSrc}
                alt="Republican elephant"
                fill
                sizes={mailerLogoSizes}
                className="object-contain drop-shadow-sm"
                priority
              />
            </div>

            <div className="leading-none">
              <div
                className={mailerHeroBrandTop}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                REPUBLICAN
              </div>
              <div className="mt-1.5 flex items-center justify-center gap-2.5 md:mt-2 md:gap-3">
                <div
                  className={mailerHeroBrandBottom}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  LEADERSHIP
                </div>
                <div className={mailerHeroAccentBar} />
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-2">
            <div
              className={mailerHeroHeadlineWide}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {headline}
            </div>
            {primaryWebsite ? (
              <p className={`${mailerHeroWebsite} mx-auto w-fit max-w-full`}>
                {primaryWebsite}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
