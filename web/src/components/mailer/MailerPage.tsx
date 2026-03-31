import type { MailerPageData } from "@/content/mailer";
import { CandidateCard } from "./CandidateCard";
import { MessagePanel } from "./MessagePanel";
import { InfoBox } from "./InfoBox";
import { FooterCTA } from "./FooterCTA";
import { EndorsementCard } from "./EndorsementCard";

export function MailerPage({ page }: { page: MailerPageData }) {
  return (
    <div className="bg-[var(--rl-soft)]">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-6 md:py-8">
        {page.top.showWebsiteLine || page.top.showQuoteLine ? (
          <div className="mb-4 flex flex-col gap-1 rounded-md border border-black/10 bg-white px-4 py-3 text-[12px] md:flex-row md:items-center md:justify-between">
            {page.top.showWebsiteLine ? (
              <div className="font-extrabold tracking-wide text-[var(--rl-blue)]">
                {page.top.websiteText}
              </div>
            ) : (
              <span />
            )}
            {page.top.showQuoteLine ? (
              <div className="text-right text-[11px] font-semibold text-black/80 md:text-[12px]">
                <span>{page.top.quoteText}</span>{" "}
                <span className="font-extrabold">{page.top.quoteAttribution}</span>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="space-y-4 md:space-y-5">
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

            return (
              <div key={section.id} className={`grid gap-4 ${gridCols}`}>
                {section.items.map((item: any) => {
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
                      />
                    );
                  }
                  return null;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

