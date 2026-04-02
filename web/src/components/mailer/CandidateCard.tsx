import Image from "next/image";
import {
  mailerCardFootnote,
  mailerCardFooterBand,
  mailerCardHeaderBlock,
  mailerCardNotice,
  mailerCardNoticeBody,
  mailerCardNoticeTitle,
  mailerCardPara,
  mailerCardParaCaps,
  mailerCardSubheading,
  mailerCardTitle,
  mailerCardUrlLabel,
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
import { SectionBox } from "./SectionBox";
import { PortraitMailerCard } from "./PortraitMailerCard";
import type { CandidateCardData } from "@/content/mailer";
import { mailerPillHref } from "@/lib/mailer-url";

export function CandidateCard({ data }: { data: CandidateCardData }) {
  const websiteHref = data.website ? mailerPillHref(data.website) : null;

  return (
    <SectionBox className="h-full min-h-0 flex flex-col transition-shadow hover:shadow-[var(--shadow-md)]">
      <PortraitMailerCard
        photo={
          <div className={mailerPhotoFrame}>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover object-top"
              sizes={mailerPhotoSizes}
            />
            <div className={mailerPhotoRing} />
          </div>
        }
        head={
          <div className={mailerCardHeaderBlock}>
            <div className={mailerPortraitKickerSlot}>
              <div className={mailerKicker}>{data.heading}</div>
            </div>
            <div className={mailerPortraitNameSlot}>
              <div className={mailerCardTitle}>{data.name}</div>
              {data.subheading ? (
                <div className={mailerCardSubheading}>{data.subheading}</div>
              ) : null}
            </div>
          </div>
        }
        body={
          <div className={mailerQuoteBox}>
            <div className={mailerQuoteBody}>
              {data.body.map((p, idx) => {
                const firstLine = p.split("\n")[0] ?? p;
                const isAllCaps =
                  firstLine === firstLine.toUpperCase() && firstLine.length > 6;
                return (
                  <p
                    key={`${data.id}-p-${idx}`}
                    className={isAllCaps ? mailerCardParaCaps : mailerCardPara}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>
        }
        footer={
          data.website || data.noticeBox || data.footnote ? (
            <div className={mailerCardFooterBand}>
              {data.website ? (
                <div className={mailerWebsiteButtonWrap}>
                  {websiteHref ? (
                    <a
                      href={websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={data.website}
                      className={mailerWebsiteButton}
                    >
                      <span className={mailerCardUrlLabel}>{data.website}</span>
                    </a>
                  ) : (
                    <span className={mailerWebsiteButtonMuted}>
                      <span className={mailerCardUrlLabel}>{data.website}</span>
                    </span>
                  )}
                </div>
              ) : null}

              {data.noticeBox ? (
                <div className={mailerCardNotice}>
                  <div className={mailerCardNoticeTitle}>{data.noticeBox.title}</div>
                  <div className={mailerCardNoticeBody}>{data.noticeBox.text}</div>
                </div>
              ) : null}

              {data.footnote ? (
                <div className={mailerCardFootnote}>{data.footnote}</div>
              ) : null}
            </div>
          ) : undefined
        }
      />
    </SectionBox>
  );
}
