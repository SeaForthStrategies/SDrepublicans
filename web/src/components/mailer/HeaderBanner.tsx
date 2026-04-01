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
          className={`flex min-w-0 flex-col items-center text-center ${mailerHeaderBlockGap}`}
        >
          <div className="flex items-center justify-center gap-3 sm:gap-5">
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
              <div className="mt-1.5 flex items-center justify-center gap-2">
                <div className={mailerHeroBrandBottom} style={{ fontFamily: "var(--font-heading)" }}>
                  LEADERSHIP
                </div>
                <div className={mailerHeroAccentBar} />
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 max-w-[min(100%,720px)] flex-col items-center gap-2.5">
            <div className={mailerHeroHeadline} style={{ fontFamily: "var(--font-heading)" }}>
              {headline}
            </div>
            <a
              href={mailerDisplayWebsiteHref(primaryWebsite)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mailerHeroWebsite} inline-block underline decoration-white/40 underline-offset-[3px] transition-opacity hover:opacity-90`}
            >
              {primaryWebsite}
            </a>
          </div>

          {quoteText || rightImageSrc ? (
            <div className="flex w-full min-w-0 max-w-[min(100%,520px)] flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              {quoteText ? (
                <div className="w-full max-w-[44ch] text-center text-[13px] font-semibold leading-snug text-white/85">
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
                <div className="relative aspect-[3/4] w-[min(136px,42vw)] shrink-0 overflow-hidden rounded-[var(--radius-md)] sm:w-[200px]">
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
    </header>
  );
}

