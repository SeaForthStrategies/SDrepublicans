import Image from "next/image";
import {
  mailerCardTitle,
  mailerKicker,
  mailerPhotoFrameCutout,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerPortraitRow,
  mailerQuoteBox,
  mailerWebsiteButton,
  mailerWebsiteButtonMuted,
} from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import { mailerExplicitOrPillHref } from "@/lib/mailer-url";

export function EndorsementCard({
  image,
  quote,
  byline,
  titleKicker,
  title,
  urlText,
  urlHref,
}: {
  image: { src: string; alt: string };
  quote: string;
  byline?: string;
  titleKicker?: string;
  title?: string;
  urlText?: string;
  urlHref?: string;
}) {
  const websiteHref = urlText
    ? mailerExplicitOrPillHref(urlHref, urlText)
    : null;
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className={mailerPortraitRow}>
        <div className={mailerPhotoFrameCutout}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            sizes={mailerPhotoSizes}
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center gap-3 text-center">
          <div className="flex flex-col gap-1">
            <div className={mailerPortraitKickerSlot}>
              {titleKicker ? <div className={mailerKicker}>{titleKicker}</div> : null}
            </div>
            <div className={mailerPortraitNameSlot}>
              {title ? <div className={mailerCardTitle}>{title}</div> : null}
            </div>
          </div>
          <div className={mailerQuoteBox}>{quote}</div>
          {urlText ? (
            <div className="w-full pt-2">
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
            <div className="whitespace-pre-line text-[12px] font-extrabold tracking-wide text-[var(--primary)]">
              {byline}
            </div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}

