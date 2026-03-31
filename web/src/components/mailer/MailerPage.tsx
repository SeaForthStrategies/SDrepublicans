import type { MailerGridItem, MailerPageData } from "@/content/mailer";
import Image from "next/image";
import { Fragment } from "react";
import {
  mailerGridGap,
  mailerMainInner,
  mailerMetaStrip,
  mailerStack,
} from "@/lib/mailer-layout";
import { CandidateCard } from "./CandidateCard";
import { MessagePanel } from "./MessagePanel";
import { InfoBox } from "./InfoBox";
import { FooterCTA } from "./FooterCTA";
import { EndorsementCard } from "./EndorsementCard";
export function MailerPage({ page }: { page: MailerPageData }) {
  return (
    <div className="min-w-0 bg-transparent">
      <div className={`min-w-0 ${mailerMainInner}`}>
        {page.showWatermark ? (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:h-[680px] md:w-[680px]">
              {/* Faint elephant watermark behind the grid */}
              <Image
                src="/mailer/brand/elephant.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 768px) min(520px, 90vw), 680px"
                priority={false}
              />
            </div>
          </div>
        ) : null}
        {page.top.showWebsiteLine || page.top.showQuoteLine ? (
          <div className={mailerMetaStrip}>
            {page.top.showWebsiteLine ? (
              <div className="font-extrabold tracking-wide text-[var(--primary)]">
                {page.top.websiteText}
              </div>
            ) : (
              <span />
            )}
            {page.top.showQuoteLine ? (
              <div className="text-center text-[13px] font-semibold text-[var(--muted)] md:text-right md:text-[12px]">
                <span className="text-[var(--fg)]/85">{page.top.quoteText}</span>{" "}
                <span className="font-extrabold text-[var(--fg)]">
                  {page.top.quoteAttribution}
                </span>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={mailerStack}>
          {page.sections.map((section) => {
            if (section.type === "footer") {
              return <FooterCTA key={section.id} text={section.text} />;
            }

            const gridCols =
              section.columns === 3
                ? "grid-cols-1 lg:grid-cols-3"
                : section.columns === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1";

            const sectionHeading =
              section.id === "endorsements"
                ? "Endorsements"
                : section.id === "candidates"
                  ? "Candidates"
                  : null;

            return (
              <Fragment key={section.id}>
                <div className="space-y-3">
                  {sectionHeading ? (
                    <h2 className="font-[var(--font-heading)] text-[13px] font-extrabold uppercase tracking-[0.18em] text-[var(--accent)] md:text-[12px]">
                      {sectionHeading}
                    </h2>
                  ) : null}
                  <div className={`grid items-stretch ${mailerGridGap} ${gridCols}`}>
                  {section.items.map((item: MailerGridItem) => {
                    if (item.type === "candidate") {
                      return <CandidateCard key={item.data.id} data={item.data} />;
                    }
                    if (item.type === "message") {
                      return <MessagePanel key={item.data.id} data={item.data} />;
                    }
                    if (item.type === "info") {
                      return <InfoBox key={item.data.id} data={item.data} />;
                    }
                    if (item.type === "endorsement") {
                      return (
                        <EndorsementCard
                          key={item.data.id}
                          image={item.data.image}
                          quote={item.data.quote}
                          byline={item.data.byline}
                          titleKicker={item.data.titleKicker}
                          title={item.data.title}
                          urlText={item.data.urlText}
                          urlHref={item.data.urlHref}
                        />
                      );
                    }
                    return null;
                  })}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

