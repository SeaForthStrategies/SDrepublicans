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
  mailerWebsitePill,
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
  const websiteLink =
    urlText && mailerExplicitOrPillHref(urlHref, urlText);
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

        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-3 text-left">
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
            <div className="pt-0.5">
              {websiteLink ? (
                <a
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mailerWebsitePill} inline-flex self-start`}
                >
                  {urlText}
                </a>
              ) : (
                <span className={`${mailerWebsitePill} inline-flex self-start`}>{urlText}</span>
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

