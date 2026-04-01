import Image from "next/image";
import {
  mailerHeaderInner,
  mailerHeroAccentBar,
  mailerHeroBrandBottom,
  mailerHeroBrandTop,
  mailerHeroHeadline,
  mailerHeroLogoBox,
  mailerHeroWebsite,
  mailerLogoSizes,
  mailerTrumpSizes,
} from "@/lib/mailer-layout";

export function HeaderBanner({
  logoSrc,
  headline,
  primaryWebsite,
  quoteText,
  quoteAttribution,
  rightImageSrc,
  rightImageAlt,
}: {
  logoSrc: string;
  headline: string;
  primaryWebsite?: string;
  quoteText?: string;
  quoteAttribution?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
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
        <div className="flex min-w-0 flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10">
          <div className="flex min-w-0 flex-1 flex-col items-center space-y-5 text-center md:items-start md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start">
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
                <div className="mt-1 flex items-center justify-center gap-2 md:justify-start">
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

            <div className="mt-0 flex w-full max-w-[34rem] flex-col gap-2">
              <div
                className={mailerHeroHeadline}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {headline}
              </div>
              {primaryWebsite ? (
                <p className={`${mailerHeroWebsite} w-fit max-w-full`}>
                  {primaryWebsite}
                </p>
              ) : null}
            </div>

            {quoteText ? (
              <div className="w-full max-w-[34rem] rounded-[var(--radius-md)] border border-white/12 bg-white/[0.06] px-3.5 py-3.5 text-left md:px-4 md:py-4">
                <p className="text-pretty whitespace-pre-line text-[13px] font-medium leading-relaxed text-white/92 md:text-[14px]">
                  {quoteText}
                </p>
                {quoteAttribution ? (
                  <p className="mt-2.5 text-[12px] font-semibold tracking-wide text-white md:text-[13px]">
                    {quoteAttribution}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          {rightImageSrc ? (
            <div className="mx-auto flex shrink-0 justify-center md:mx-0 md:pt-0.5">
              <div className="relative aspect-[3/4] w-[min(112px,28vw)] overflow-hidden rounded-[var(--radius-md)] border border-white/15 bg-black/25 shadow-md sm:w-[120px] md:w-[128px]">
                <Image
                  src={rightImageSrc}
                  alt={rightImageAlt ?? ""}
                  fill
                  className="object-cover object-center"
                  sizes={mailerTrumpSizes}
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
