import type { MailerGridItem, MailerPageData, MailerSection } from "@/content/mailer";
import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import {
  mailerGridGap,
  mailerMainInner,
  mailerMetaStrip,
  mailerSectionTitleRule,
  mailerSectionTitleText,
  mailerSectionTitleWrap,
  mailerStack,
} from "@/lib/mailer-layout";
import { CandidateCard } from "./CandidateCard";
import { MessagePanel } from "./MessagePanel";
import { InfoBox } from "./InfoBox";
import { SiteDisclaimerFooter } from "./SiteDisclaimerFooter";
import { EndorsementCard } from "./EndorsementCard";

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className={`${mailerSectionTitleWrap} mb-4 md:mb-5`}>
      <h2 id={id} className={mailerSectionTitleText}>
        {title}
      </h2>
      <div className={mailerSectionTitleRule} aria-hidden="true" />
    </div>
  );
}

function renderGridItem(
  item: MailerGridItem,
  section: Extract<MailerSection, { type: "grid" }>,
): ReactNode {
  const featured =
    item.type === "endorsement" && item.data.featured === true;
  const spanFeatured =
    featured && section.columns === 2 ? "md:col-span-2" : "";

  if (item.type === "candidate") {
    return (
      <div key={item.data.id} className="min-w-0">
        <CandidateCard data={item.data} />
      </div>
    );
  }
  if (item.type === "message") {
    return (
      <div key={item.data.id} className="min-w-0">
        <MessagePanel data={item.data} />
      </div>
    );
  }
  if (item.type === "info") {
    const taxFullWidth =
      section.id === "grid-top" && section.columns >= 3 ? "lg:col-span-3" : "";
    return (
      <div
        key={item.data.id}
        className={`min-w-0 ${spanFeatured} ${taxFullWidth}`}
      >
        <InfoBox data={item.data} />
      </div>
    );
  }
  if (item.type === "endorsement") {
    return (
      <div key={item.data.id} className={`min-w-0 ${spanFeatured}`}>
        <EndorsementCard
          image={item.data.image}
          quote={item.data.quote}
          byline={item.data.byline}
          titleKicker={item.data.titleKicker}
          title={item.data.title}
          urlText={item.data.urlText}
          urlHref={item.data.urlHref}
          featured={item.data.featured}
        />
      </div>
    );
  }
  return null;
}

export function MailerPage({ page }: { page: MailerPageData }) {
  const footerSection = page.sections.find((s) => s.type === "footer");
  const gridSections = page.sections.filter((s) => s.type !== "footer");

  return (
    <>
      <div className="min-w-0 bg-transparent">
        <div className={`relative min-w-0 ${mailerMainInner}`}>
          {page.showWatermark ? (
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute left-1/2 top-[8%] h-[480px] w-[480px] -translate-x-1/2 opacity-[0.045] md:h-[640px] md:w-[640px] md:opacity-[0.055]">
                <Image
                  src="/mailer/brand/elephant.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) min(480px, 90vw), 640px"
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
                <div className="text-center text-[13px] font-semibold leading-relaxed text-[var(--muted)] md:text-[14px]">
                  <span className="text-[var(--fg)]/85">{page.top.quoteText}</span>{" "}
                  <span className="font-extrabold text-[var(--fg)]">
                    {page.top.quoteAttribution}
                  </span>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className={mailerStack}>
            {gridSections.map((section) => {
              if (section.type !== "grid") return null;

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

              /** Mayor Franklin full-width, then Issa + Brian Jones + Jordan Marks in 3 columns */
              if (section.id === "endorsements" && section.items.length > 1) {
                const [lead, ...rest] = section.items;
                return (
                  <Fragment key={section.id}>
                    <section
                      className="scroll-mt-8 space-y-5 md:space-y-6"
                      aria-labelledby={
                        sectionHeading ? `section-${section.id}` : undefined
                      }
                    >
                      {sectionHeading ? (
                        <SectionHeading
                          id={`section-${section.id}`}
                          title={sectionHeading}
                        />
                      ) : null}
                      <div className="min-w-0">{renderGridItem(lead, section)}</div>
                      {rest.length > 0 ? (
                        <div
                          className={`grid items-stretch ${mailerGridGap} grid-cols-1 md:grid-cols-3`}
                        >
                          {rest.map((item) => renderGridItem(item, section))}
                        </div>
                      ) : null}
                    </section>
                  </Fragment>
                );
              }

              return (
                <Fragment key={section.id}>
                  <section
                    className="scroll-mt-8 space-y-5 md:space-y-6"
                    aria-labelledby={
                      sectionHeading ? `section-${section.id}` : undefined
                    }
                  >
                    {sectionHeading ? (
                      <SectionHeading
                        id={`section-${section.id}`}
                        title={sectionHeading}
                      />
                    ) : null}
                    <div
                      className={`grid items-stretch ${mailerGridGap} ${gridCols}`}
                    >
                      {section.items.map((item: MailerGridItem) =>
                        renderGridItem(item, section),
                      )}
                    </div>
                  </section>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
      {footerSection ? (
        <SiteDisclaimerFooter text={footerSection.text} />
      ) : null}
    </>
  );
}
