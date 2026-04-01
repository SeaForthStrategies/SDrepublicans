import { ChairmanBanner } from "@/components/mailer/ChairmanBanner";
import { HeroElectionStrip } from "@/components/mailer/HeroElectionStrip";
import { MailerPage } from "@/components/mailer/MailerPage";
import { QUICK_CONTACT, mailer } from "@/content/mailer";
import { HeaderBanner } from "@/components/mailer/HeaderBanner";
import { mailerSectionTop } from "@/lib/mailer-layout";

export default function Home() {
  const page = mailer.page;

  return (
    <div className="min-h-full min-w-0 overflow-x-clip bg-[var(--bg)]">
      <main className="relative min-w-0">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(520px,75vh)] bg-[radial-gradient(ellipse_800px_420px_at_50%_-8%,rgba(18,58,138,0.1),transparent_72%)]"
          aria-hidden
        />

        <div className={`${mailerSectionTop} pb-10 md:pb-14`}>
          <HeaderBanner
            logoSrc={mailer.header.brandLeft.logo.src}
            headline={mailer.header.headline}
            rightImageSrc={mailer.header.headerRightImage?.src}
            rightImageAlt={mailer.header.headerRightImage?.alt}
            quoteText={page.top.quoteText}
            quoteAttribution={page.top.quoteAttribution}
          />

          <HeroElectionStrip
            left={page.electionBanner.left}
            rightTop={page.electionBanner.rightTop}
            rightBottom={page.electionBanner.rightBottom}
            quickContact={QUICK_CONTACT}
          />

          {mailer.header.chairman ? (
            <div className="mt-6 md:mt-8">
              <ChairmanBanner
                chairmanImageSrc={mailer.header.chairman.image.src}
                chairmanImageAlt={mailer.header.chairman.image.alt}
                quote={mailer.header.chairman.quote}
                byline={mailer.header.chairman.byline}
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
