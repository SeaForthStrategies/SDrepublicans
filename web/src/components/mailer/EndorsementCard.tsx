import Image from "next/image";
import {
  mailerCardHeaderBlock,
  mailerCardTextCol,
  mailerCardTitle,
  mailerKicker,
  mailerPhotoFrameCutout,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerPortraitPhotoCol,
  mailerPortraitRow,
  mailerQuoteBox,
  mailerWebsiteButton,
  mailerWebsiteButtonMuted,
} from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import { mailerExplicitOrPillHref } from "@/lib/mailer-url";
import { cn } from "@/lib/cn";

export function EndorsementCard({
  image,
  quote,
  byline,
  titleKicker,
  title,
  urlText,
  urlHref,
  featured,
}: {
  image: { src: string; alt: string };
  quote: string;
  byline?: string;
  titleKicker?: string;
  title?: string;
  urlText?: string;
  urlHref?: string;
  featured?: boolean;
}) {
  const websiteHref = urlText
    ? mailerExplicitOrPillHref(urlHref, urlText)
    : null;

  const footer = urlText || byline;

  return (
    <SectionBox
      className={cn(
        "h-full overflow-hidden",
        featured &&
          "ring-1 ring-[var(--primary)]/25 shadow-[var(--shadow-md)]",
      )}
    >
      <div className={mailerPortraitRow}>
        <div className={`${mailerPhotoFrameCutout} ${mailerPortraitPhotoCol}`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            sizes={mailerPhotoSizes}
            priority={featured}
          />
        </div>

        <div className={mailerCardTextCol}>
          <div className={mailerCardHeaderBlock}>
            <div className={`${mailerPortraitKickerSlot}`}>
              {titleKicker ? <div className={mailerKicker}>{titleKicker}</div> : null}
            </div>
            <div className={mailerPortraitNameSlot}>
              {title ? <div className={mailerCardTitle}>{title}</div> : null}
            </div>
          </div>

          <div className={`${mailerQuoteBox} min-h-0 flex-1`}>{quote}</div>

          {footer ? (
            <div className="flex w-full shrink-0 flex-col gap-2 border-t border-[var(--border)] pt-3.5">
              {urlText ? (
                <div className="w-full">
                  {websiteHref ? (
                    <a
                      href={websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={websiteHref}
                      className={`${mailerWebsiteButton} no-underline`}
                    >
                      <span className="break-all">{urlText}</span>
                    </a>
                  ) : (
                    <span className={mailerWebsiteButtonMuted}>
                      <span className="break-all">{urlText}</span>
                    </span>
                  )}
                </div>
              ) : null}
              {byline ? (
                <div className="whitespace-pre-line text-[11px] font-extrabold leading-snug tracking-wide text-[var(--primary)] md:text-[12px]">
                  {byline}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}
