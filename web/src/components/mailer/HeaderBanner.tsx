import Image from "next/image";
import {
  mailerHeaderBlockGap,
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
import { mailerDisplayWebsiteHref } from "@/lib/mailer-url";

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
  primaryWebsite: string;
  quoteText?: string;
  quoteAttribution?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
}) {
  return (
    <header className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#071027_0%,var(--primary-2)_40%,#0b1220_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />

      <div className={mailerHeaderInner}>
        <div
          className={`grid min-w-0 md:grid-cols-[auto,minmax(0,1fr)] md:items-start ${mailerHeaderBlockGap}`}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:justify-start">
            <div className={mailerHeroLogoBox}>
              <Image
                src={logoSrc}
                alt="Republican elephant"
                fill
                sizes={mailerLogoSizes}
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-none">
              <div className={mailerHeroBrandTop} style={{ fontFamily: "var(--font-heading)" }}>
                REPUBLICAN
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className={mailerHeroBrandBottom} style={{ fontFamily: "var(--font-heading)" }}>
                  LEADERSHIP
                </div>
                <div className={mailerHeroAccentBar} />
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-6 lg:gap-8">
            <div className="flex min-w-0 flex-col gap-2 text-center md:min-w-[min(100%,280px)] md:flex-1 md:items-start md:text-left">
              <div className={mailerHeroHeadline} style={{ fontFamily: "var(--font-heading)" }}>
                {headline}
              </div>
              <a
                href={mailerDisplayWebsiteHref(primaryWebsite)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mailerHeroWebsite} inline-block underline decoration-white/35 underline-offset-2 transition-opacity hover:opacity-90`}
              >
                {primaryWebsite}
              </a>
            </div>

            {quoteText || rightImageSrc ? (
              <div className="flex w-full min-w-0 flex-col items-center gap-3 md:max-w-[min(100%,380px)] md:flex-row md:items-start md:justify-end md:gap-4">
                {quoteText ? (
                  <div className="w-full max-w-[44ch] text-center text-[13px] font-semibold leading-snug text-white/85 md:text-left md:text-[13px]">
                    <div className="text-pretty whitespace-pre-line">{quoteText}</div>
                    {quoteAttribution ? (
                      <div className="mt-1.5 text-[13px] font-extrabold text-white/90">
                        {quoteAttribution}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <span />
                )}

                {rightImageSrc ? (
                  <div className="relative aspect-[3/4] w-[min(136px,42vw)] shrink-0 overflow-hidden rounded-[var(--radius-md)] md:w-[200px]">
                    <Image
                      src={rightImageSrc}
                      alt={rightImageAlt ?? ""}
                      fill
                      className="object-cover object-center"
                      sizes={mailerTrumpSizes}
                      priority
                    />
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

