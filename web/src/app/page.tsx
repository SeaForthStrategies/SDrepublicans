import { EndorsementCard } from "@/components/mailer/EndorsementCard";
import { MailerPage } from "@/components/mailer/MailerPage";
import { SkipToContent } from "@/components/mailer/SkipToContent";
import { SiteHero } from "@/components/mailer/SiteHero";
import { SiteNav } from "@/components/mailer/SiteNav";
import { QUICK_CONTACT, mailer } from "@/content/mailer";
import { mailerContainer } from "@/lib/mailer-layout";

export default function Home() {
  const page = mailer.page;
  const issa = page.fullWidthEndorsement;

  return (
    <div className="min-h-full min-w-0 overflow-x-clip bg-[var(--bg)] pt-0">
      <SkipToContent />
      <main
        id="main-content"
        tabIndex={-1}
        className="relative min-w-0 pt-0 outline-none focus:outline-none"
      >
        <SiteNav
          logo={mailer.header.brandLeft.logo}
          showMessageLink={Boolean(issa)}
          showChairmanLink={Boolean(mailer.header.chairman)}
        />
        <div className="pb-10 md:pb-14">
          <SiteHero
            header={mailer.header}
            electionBanner={page.electionBanner}
            quickContact={QUICK_CONTACT}
          />

          {issa ? (
            <div
              id="message"
              className={`${mailerContainer} mt-6 scroll-mt-24 md:mt-8`}
            >
              <EndorsementCard
                image={issa.image}
                quote={issa.quote}
                byline={issa.byline}
                titleKicker={issa.titleKicker}
                title={issa.title}
                urlText={issa.urlText}
                urlHref={issa.urlHref}
                featured={issa.featured}
                layout="split"
              />
            </div>
          ) : null}

          <div className="mt-8 md:mt-10">
            <MailerPage page={page} />
          </div>
        </div>
      </main>
    </div>
  );
}
