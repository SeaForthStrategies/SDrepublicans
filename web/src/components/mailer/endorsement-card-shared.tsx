import Image from "next/image";
import {
  mailerCardFooterBand,
  mailerCardHeaderBlock,
  mailerCardPara,
  mailerCardTitle,
  mailerCardUrlLabel,
  mailerFooterByline,
  mailerKicker,
  mailerPhotoFrame,
  mailerPhotoRing,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerQuoteBody,
  mailerQuoteBox,
  mailerWebsiteButton,
  mailerWebsiteButtonMuted,
  mailerWebsiteButtonWrap,
} from "@/lib/mailer-layout";
import { mailerExplicitOrPillHref } from "@/lib/mailer-url";

/** Fixed headshot: same dimensions, radius, and crop for every endorsement card. */
export function EndorsementCardPhoto({
  image,
  priority,
}: {
  image: { src: string; alt: string };
  priority?: boolean;
}) {
  return (
    <div className={mailerPhotoFrame}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center"
        sizes={mailerPhotoSizes}
        priority={priority === true}
      />
      <div className={mailerPhotoRing} />
    </div>
  );
}

/** Red endorsement label + black title — identical markup everywhere. */
export function EndorsementCardHead({
  titleKicker,
  title,
}: {
  titleKicker?: string;
  title?: string;
}) {
  return (
    <div className={mailerCardHeaderBlock}>
      <div className={mailerPortraitKickerSlot}>
        {titleKicker ? (
          <div className={mailerKicker}>{titleKicker}</div>
        ) : (
          <span className="sr-only">Endorsement</span>
        )}
      </div>
      <div className={mailerPortraitNameSlot}>
        {title ? (
          <div className={mailerCardTitle}>{title}</div>
        ) : (
          <span className="sr-only">Title</span>
        )}
      </div>
    </div>
  );
}

export function EndorsementCardQuote({ quote }: { quote: string }) {
  return (
    <div className={mailerQuoteBox}>
      <div className={mailerQuoteBody}>
        <p className={mailerCardPara}>{quote}</p>
      </div>
    </div>
  );
}

export function EndorsementCardFooterBand({
  byline,
  urlText,
  urlHref,
}: {
  byline?: string;
  urlText?: string;
  urlHref?: string;
}) {
  const websiteHref = urlText
    ? mailerExplicitOrPillHref(urlHref, urlText)
    : null;

  return (
    <div className={mailerCardFooterBand}>
      {byline ? <div className={mailerFooterByline}>{byline}</div> : null}
      {urlText ? (
        <div className={mailerWebsiteButtonWrap}>
          {websiteHref ? (
            <a
              href={websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              title={urlText}
              className={mailerWebsiteButton}
            >
              <span className={mailerCardUrlLabel}>{urlText}</span>
            </a>
          ) : (
            <span className={mailerWebsiteButtonMuted}>
              <span className={mailerCardUrlLabel}>{urlText}</span>
            </span>
          )}
        </div>
      ) : null}
    </div>
  );
}
