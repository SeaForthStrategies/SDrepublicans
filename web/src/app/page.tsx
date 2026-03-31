import { HeaderBanner } from "@/components/mailer/HeaderBanner";
import { ElectionBanner } from "@/components/mailer/ElectionBanner";
import { MailerPage } from "@/components/mailer/MailerPage";
import { mailer } from "@/content/mailer";

export default function Home() {
  return (
    <div className="min-h-full bg-[var(--background)]">
      <HeaderBanner
        logoSrc={mailer.header.brandLeft.logo.src}
        headline={mailer.header.headline}
        primaryWebsite={mailer.header.primaryWebsite}
      />

      {mailer.pages.map((page) => (
        <div key={page.id}>
          <ElectionBanner
            left={page.electionBanner.left}
            rightTop={page.electionBanner.rightTop}
            rightBottom={page.electionBanner.rightBottom}
          />
          <MailerPage page={page} />
        </div>
      ))}
    </div>
  );
}
