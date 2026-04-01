import { ChairmanBanner } from "@/components/mailer/ChairmanBanner";
import { ElectionBanner } from "@/components/mailer/ElectionBanner";
import { MailerPage } from "@/components/mailer/MailerPage";
import { mailer } from "@/content/mailer";
import { HeaderBanner } from "@/components/mailer/HeaderBanner";
import { mailerSectionTop } from "@/lib/mailer-layout";

export default function Home() {
  const page = mailer.page;

  return (
    <div className="min-h-full min-w-0 overflow-x-clip">
      <main className="relative min-w-0">
        <div className="absolute inset-x-0 top-0 -z-10 h-[min(780px,85vh)] [background:radial-gradient(980px_580px_at_50%_0%,rgba(18,58,138,0.10),transparent_72%)]" />

        <section
          className={`mailer-section-animate ${mailerSectionTop} pb-10 md:pb-16`}
        >
          <HeaderBanner
            logoSrc={mailer.header.brandLeft.logo.src}
            headline={mailer.header.headline}
            primaryWebsite={mailer.header.primaryWebsite}
            rightImageSrc={mailer.header.headerRightImage?.src}
            rightImageAlt={mailer.header.headerRightImage?.alt}
            quoteText={page.top.quoteText}
            quoteAttribution={page.top.quoteAttribution}
          />

          <ElectionBanner
            left={page.electionBanner.left}
            rightTop={page.electionBanner.rightTop}
            rightBottom={page.electionBanner.rightBottom}
          />

          {mailer.header.chairman ? (
            <ChairmanBanner
              chairmanImageSrc={mailer.header.chairman.image.src}
              chairmanImageAlt={mailer.header.chairman.image.alt}
              quote={mailer.header.chairman.quote}
              byline={mailer.header.chairman.byline}
            />
          ) : null}

          <MailerPage page={page} />
        </section>
      </main>
    </div>
  );
}
