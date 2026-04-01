import Image from "next/image";
import {
  mailerCardPadding,
  mailerChairmanSizes,
  mailerContainer,
} from "@/lib/mailer-layout";

/** Chairman photo + quote — above the election (poll) strip. */
export function ChairmanBanner({
  chairmanImageSrc,
  chairmanImageAlt,
  quote,
  byline,
}: {
  chairmanImageSrc: string;
  chairmanImageAlt: string;
  quote: string;
  byline: string;
}) {
  return (
    <div className="bg-[var(--bg)]">
      <div className={mailerContainer}>
        <div
          className={`relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] ${mailerCardPadding}`}
        >
          <div
            className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--primary)_0%,var(--accent)_100%)]"
            aria-hidden
          />
          <div className="flex flex-col gap-4 pl-3.5 sm:flex-row sm:items-start sm:gap-5 sm:pl-4 md:gap-6 md:pl-5">
            <div className="relative mx-auto h-[96px] w-[96px] shrink-0 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:mx-0 sm:h-[100px] sm:w-[100px]">
              <Image
                src={chairmanImageSrc}
                alt={chairmanImageAlt}
                fill
                className="object-cover object-[50%_22%]"
                sizes={mailerChairmanSizes}
                priority
              />
            </div>
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="text-pretty whitespace-pre-line text-[14px] font-medium italic leading-relaxed text-[var(--fg)]/95 md:text-[15px]">
                {quote}
              </p>
              <p className="mt-3 whitespace-pre-line text-[11px] font-extrabold uppercase tracking-[0.12em] text-[var(--primary)] md:text-[12px]">
                {byline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
