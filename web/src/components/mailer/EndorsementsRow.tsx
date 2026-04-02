import Image from "next/image";
import type { ReactNode } from "react";
import type { MailerGridItem } from "@/content/mailer";
import { cn } from "@/lib/cn";
import {
  mailerCardFootnote,
  mailerCardFooterBand,
  mailerCardHeaderBlock,
  mailerCardNotice,
  mailerCardNoticeBody,
  mailerCardNoticeTitle,
  mailerCardPara,
  mailerCardParaCaps,
  mailerCardPadding,
  mailerCardShell,
  mailerCardSubheading,
  mailerCardTitle,
  mailerCardUrlLabel,
  mailerDeskColBody,
  mailerDeskColFoot,
  mailerDeskColHead,
  mailerDeskColPhoto,
  mailerDeskColRule,
  mailerGridGap,
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
import {
  EndorsementCardFooterBand,
  EndorsementCardHead,
  EndorsementCardPhoto,
  EndorsementCardQuote,
} from "./endorsement-card-shared";
import { mailerPillHref } from "@/lib/mailer-url";

function EndorsementColumn({ item }: { item: Extract<MailerGridItem, { type: "endorsement" }> }) {
  const d = item.data;
  const featured = d.featured === true;
  const footer = d.urlText || d.byline;

  return (
    <div
      className={cn(
        mailerCardShell,
        mailerCardPadding,
        featured &&
          "ring-1 ring-[var(--primary)]/25 shadow-[var(--shadow-md)]",
      )}
    >
      <section className="mailer-endorsements-desk-col h-full min-h-0 w-full min-w-0">
        <div className={mailerDeskColPhoto}>
          <EndorsementCardPhoto image={d.image} priority={featured} />
        </div>
        <div className={mailerDeskColHead}>
          <EndorsementCardHead titleKicker={d.titleKicker} title={d.title} />
        </div>

        <div className={mailerDeskColRule} aria-hidden="true" />

        <div className={mailerDeskColBody}>
          <EndorsementCardQuote quote={d.quote} />
        </div>

        <div className={mailerDeskColFoot}>
          {footer ? (
            <EndorsementCardFooterBand
              byline={d.byline}
              urlText={d.urlText}
              urlHref={d.urlHref}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}

function CandidateColumn({ item }: { item: Extract<MailerGridItem, { type: "candidate" }> }) {
  const d = item.data;
  const websiteHref = d.website ? mailerPillHref(d.website) : null;

  return (
    <div
      className={cn(
        mailerCardShell,
        mailerCardPadding,
        "hover:shadow-[var(--shadow-md)]",
      )}
    >
      <section className="mailer-endorsements-desk-col h-full min-h-0 w-full min-w-0">
        <div className={mailerDeskColPhoto}>
          <div className={mailerPhotoFrame}>
            <Image
              src={d.image.src}
              alt={d.image.alt}
              fill
              className="object-cover object-top"
              sizes={mailerPhotoSizes}
            />
            <div className={mailerPhotoRing} />
          </div>
        </div>
        <div className={mailerDeskColHead}>
          <div className={mailerCardHeaderBlock}>
            <div className={mailerPortraitKickerSlot}>
              <div className={mailerKicker}>{d.heading}</div>
            </div>
            <div className={mailerPortraitNameSlot}>
              <div className={mailerCardTitle}>{d.name}</div>
              {d.subheading ? (
                <div className={mailerCardSubheading}>{d.subheading}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className={mailerDeskColRule} aria-hidden="true" />

        <div className={mailerDeskColBody}>
          <div className={mailerQuoteBox}>
            <div className={mailerQuoteBody}>
              {d.body.map((p, idx) => {
                const firstLine = p.split("\n")[0] ?? p;
                const isAllCaps =
                  firstLine === firstLine.toUpperCase() && firstLine.length > 6;
                return (
                  <p
                    key={`${d.id}-p-${idx}`}
                    className={isAllCaps ? mailerCardParaCaps : mailerCardPara}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className={mailerDeskColFoot}>
          {d.website || d.noticeBox || d.footnote ? (
            <div className={mailerCardFooterBand}>
              {d.website ? (
                <div className={mailerWebsiteButtonWrap}>
                  {websiteHref ? (
                    <a
                      href={websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={d.website}
                      className={mailerWebsiteButton}
                    >
                      <span className={mailerCardUrlLabel}>{d.website}</span>
                    </a>
                  ) : (
                    <span className={mailerWebsiteButtonMuted}>
                      <span className={mailerCardUrlLabel}>{d.website}</span>
                    </span>
                  )}
                </div>
              ) : null}
              {d.noticeBox ? (
                <div className={mailerCardNotice}>
                  <div className={mailerCardNoticeTitle}>{d.noticeBox.title}</div>
                  <div className={mailerCardNoticeBody}>{d.noticeBox.text}</div>
                </div>
              ) : null}
              {d.footnote ? (
                <div className={mailerCardFootnote}>{d.footnote}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function DesktopColumn({ item }: { item: MailerGridItem }) {
  if (item.type === "endorsement") {
    return <EndorsementColumn item={item} />;
  }
  if (item.type === "candidate") {
    return <CandidateColumn item={item} />;
  }
  return null;
}

function itemKey(item: MailerGridItem): string {
  return item.data.id;
}

export type PortraitGridDesktopFrom = "md" | "lg";

/**
 * Desktop 3-up uses the same endorsement building blocks as `EndorsementCard` (subgrid-aligned rows).
 */
export function EndorsementsRow({
  items,
  mobileCells,
  desktopFrom = "md",
}: {
  items: MailerGridItem[];
  mobileCells: ReactNode[];
  desktopFrom?: PortraitGridDesktopFrom;
}) {
  const stackHidden =
    desktopFrom === "lg" ? "lg:hidden" : "md:hidden";
  const deskGrid =
    desktopFrom === "lg"
      ? "mailer-endorsements-desk hidden w-full min-w-0 gap-x-6 lg:grid lg:gap-x-7"
      : "mailer-endorsements-desk hidden w-full min-w-0 gap-x-6 md:grid md:gap-x-7";

  return (
    <>
      <div
        className={`grid items-stretch ${mailerGridGap} grid-cols-1 ${stackHidden}`}
      >
        {mobileCells}
      </div>
      <div className={deskGrid}>
        {items.map((item) => (
          <DesktopColumn key={itemKey(item)} item={item} />
        ))}
      </div>
    </>
  );
}
