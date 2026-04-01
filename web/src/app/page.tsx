import { ChairmanBanner } from "@/components/mailer/ChairmanBanner";
import { EndorsementCard } from "@/components/mailer/EndorsementCard";
import { HeroElectionStrip } from "@/components/mailer/HeroElectionStrip";
import { MailerPage } from "@/components/mailer/MailerPage";
import { QUICK_CONTACT, mailer } from "@/content/mailer";
import { HeaderBanner } from "@/components/mailer/HeaderBanner";
import { mailerContainer } from "@/lib/mailer-layout";

export default function Home() {
  const page = mailer.page;
  const issa = page.fullWidthEndorsement;

  return (
    <div className="min-h-full min-w-0 overflow-x-clip bg-[var(--bg)]">
      <main className="relative min-w-0">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(520px,75vh)] bg-[radial-gradient(ellipse_800px_420px_at_50%_-8%,rgba(18,58,138,0.1),transparent_72%)]"
          aria-hidden
        />

        <div className="pb-10 md:pb-14">
          <HeaderBanner
            logoSrc={mailer.header.brandLeft.logo.src}
            headline={mailer.header.headline}
            titleTop={mailer.header.brandLeft.titleTop}
            titleBottom={mailer.header.brandLeft.titleBottom}
          />

          {mailer.header.chairman ? (
            <div className="mt-6 md:mt-7">
              <ChairmanBanner
                chairmanImageSrc={mailer.header.chairman.image.src}
                chairmanImageAlt={mailer.header.chairman.image.alt}
                quote={mailer.header.chairman.quote}
                byline={mailer.header.chairman.byline}
              />
            </div>
          ) : null}

          <div className="mt-6 md:mt-7">
            <HeroElectionStrip
              left={page.electionBanner.left}
              rightTop={page.electionBanner.rightTop}
              rightBottom={page.electionBanner.rightBottom}
              quickContact={QUICK_CONTACT}
            />
          </div>

          {issa ? (
            <div className={`${mailerContainer} mt-6 md:mt-8`}>
              <EndorsementCard
                image={issa.image}
                quote={issa.quote}
                byline={issa.byline}
                titleKicker={issa.titleKicker}
                title={issa.title}
                urlText={issa.urlText}
                urlHref={issa.urlHref}
                featured={issa.featured}
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
