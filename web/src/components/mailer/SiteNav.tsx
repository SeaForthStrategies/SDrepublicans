"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { mailerContainer } from "@/lib/mailer-layout";
import type { ImageRef } from "@/content/mailer";

const navLinkLight =
  "whitespace-nowrap rounded-md px-2.5 py-2 font-[var(--font-heading)] text-[0.75rem] font-bold uppercase tracking-wide text-white transition-[color,background-color,transform] duration-200 ease-out hover:bg-white/14 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-colors motion-reduce:active:scale-100 sm:text-[0.8125rem]";

const navLinkSolid =
  "whitespace-nowrap rounded-md px-2.5 py-2 font-[var(--font-heading)] text-[0.75rem] font-bold uppercase tracking-wide text-[var(--primary-2)] transition-[color,background-color,transform] duration-200 ease-out hover:bg-[var(--surface-3)] hover:text-[var(--primary)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:active:scale-100 sm:text-[0.8125rem]";

type SiteNavProps = {
  logo: ImageRef;
};

export function SiteNav({ logo }: SiteNavProps) {
  const [overHero, setOverHero] = useState(true);

  useLayoutEffect(() => {
    const heroBackdrop = document.getElementById("hero-backdrop");
    const update = () => {
      if (!heroBackdrop) {
        setOverHero(false);
        return;
      }
      const rect = heroBackdrop.getBoundingClientRect();
      const threshold = window.matchMedia("(min-width: 640px)").matches
        ? 78
        : 108;
      setOverHero(rect.bottom > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const navLink = overHero ? navLinkLight : navLinkSolid;

  const links: { href: string; label: string }[] = [
    { href: "#vote", label: "Election" },
    { href: "#section-endorsements", label: "Endorsements" },
    { href: "#section-candidates", label: "Candidates" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
        overHero
          ? "border-white/15 bg-transparent shadow-none backdrop-blur-[2px] supports-[backdrop-filter]:bg-[rgba(8,31,69,0.12)]"
          : "border-[var(--primary)]/14 bg-[var(--surface)]/95 shadow-[var(--shadow-sm)] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--surface)]/90"
      }`}
    >
      <nav
        className={`${mailerContainer} flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5`}
        aria-label="Page sections"
      >
        <Link
          href="#top"
          className={`flex shrink-0 items-center gap-2.5 rounded-md outline-offset-4 transition-opacity duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:active:scale-100 ${
            overHero
              ? "focus-visible:ring-white focus-visible:ring-offset-transparent"
              : "focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
          }`}
        >
          <span className="relative block h-9 w-9 sm:h-10 sm:w-10">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className={`object-contain ${overHero ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]" : ""}`}
              sizes="40px"
              priority
            />
          </span>
          <span
            className={`hidden text-left font-[var(--font-heading)] text-[0.6875rem] font-extrabold uppercase leading-tight tracking-[0.12em] sm:block sm:text-[0.75rem] sm:tracking-[0.14em] ${
              overHero
                ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
                : "text-[var(--primary-2)]"
            }`}
          >
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
