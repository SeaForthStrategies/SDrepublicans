import { mailerContainer } from "@/lib/mailer-layout";

/** Legal / voter notice — readable band at page end. */
export function SiteDisclaimerFooter({ text }: { text: string }) {
  const [title, ...rest] = text.split("\n\n");
  const body = rest.join("\n\n");

  return (
    <footer
      id="voter-notice"
      className="scroll-mt-24 border-t border-[var(--border)] bg-[var(--surface-2)]"
    >
      <div className={`${mailerContainer} py-8 md:py-9`}>
        <div className="mx-auto w-full max-w-[52rem] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-6 text-center shadow-[var(--shadow-xs)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[var(--primary)]/12 hover:shadow-[var(--shadow-sm)] sm:px-6 md:px-8 md:py-7">
          <h3 className="font-[var(--font-heading)] text-[clamp(0.875rem,0.5vw+0.6rem,1rem)] font-bold uppercase tracking-[0.12em] text-[var(--primary)] sm:tracking-[0.14em]">
            {title}
          </h3>
          <div className="mt-4 border-t border-[var(--border)] pt-4">
            <p className="mx-auto max-w-prose text-pretty whitespace-pre-line text-[clamp(0.8125rem,0.4vw+0.55rem,0.9375rem)] font-medium leading-relaxed text-[var(--muted)] md:leading-[1.65]">
              {body}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
