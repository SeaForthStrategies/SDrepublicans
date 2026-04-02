import Image from "next/image";
import Link from "next/link";
import { mailerContainer } from "@/lib/mailer-layout";
import type { ImageRef } from "@/content/mailer";

const navLink =
  "whitespace-nowrap rounded-md px-2.5 py-2 font-[var(--font-heading)] text-[0.75rem] font-bold uppercase tracking-wide text-[var(--primary-2)] transition-[color,background-color,transform] duration-200 ease-out hover:bg-[var(--surface-3)] hover:text-[var(--primary)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:active:scale-100 sm:text-[0.8125rem]";

type SiteNavProps = {
  logo: ImageRef;
  showMessageLink: boolean;
  showChairmanLink: boolean;
};

export function SiteNav({
  logo,
  showMessageLink,
  showChairmanLink,
}: SiteNavProps) {
  const links: { href: string; label: string }[] = [
    { href: "#vote", label: "Election" },
    ...(showChairmanLink ? [{ href: "#chairman", label: "Chairman" }] : []),
    ...(showMessageLink ? [{ href: "#message", label: "Message" }] : []),
    { href: "#section-endorsements", label: "Endorsements" },
    { href: "#section-candidates", label: "Candidates" },
    { href: "#voter-notice", label: "Voter notice" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--primary)]/14 bg-[var(--surface)]/95 shadow-[var(--shadow-sm)] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--surface)]/90">
      <nav
        className={`${mailerContainer} flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5`}
        aria-label="Page sections"
      >
        <Link
          href="#top"
          className="flex shrink-0 items-center gap-2.5 rounded-md outline-offset-4 transition-opacity duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 motion-reduce:active:scale-100"
        >
          <span className="relative block h-9 w-9 sm:h-10 sm:w-10">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </span>
          <span className="hidden text-left font-[var(--font-heading)] text-[0.6875rem] font-extrabold uppercase leading-tight tracking-[0.12em] text-[var(--primary-2)] sm:block sm:text-[0.75rem] sm:tracking-[0.14em]">
            San Diego
            <br />
            Republican Leadership
          </span>
        </Link>

        <ul className="flex min-w-0 flex-nowrap items-center gap-x-0.5 gap-y-1 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-0.5 pl-0.5 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:justify-end sm:overflow-visible sm:pb-0 sm:pl-0 sm:pr-0 md:gap-x-1 [&::-webkit-scrollbar]:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
