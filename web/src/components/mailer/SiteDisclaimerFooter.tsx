import { mailerContainer } from "@/lib/mailer-layout";

/** Legal / voter notice — readable band at page end. */
export function SiteDisclaimerFooter({ text }: { text: string }) {
  const [title, ...rest] = text.split("\n\n");
  const body = rest.join("\n\n");

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-2)]">
      <div className={`${mailerContainer} py-8 md:py-9`}>
        <div className="mx-auto max-w-[52rem] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-6 shadow-[var(--shadow-xs)] sm:px-6 md:px-8 md:py-7">
          <h3 className="text-center font-[var(--font-heading)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--primary)] md:text-[12px]">
            {title}
          </h3>
          <div className="mx-auto mt-4 max-w-none border-t border-[var(--border)] pt-4 text-center sm:text-left">
            <p className="text-pretty whitespace-pre-line text-[11px] font-medium leading-relaxed text-[var(--muted)] md:text-[12px] md:leading-relaxed">
              {body}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
