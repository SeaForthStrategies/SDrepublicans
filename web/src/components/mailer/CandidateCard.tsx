import Image from "next/image";
import {
  mailerCardTitle,
  mailerKicker,
  mailerPhotoFrame,
  mailerPhotoRing,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerPortraitRow,
  mailerWebsiteButton,
  mailerWebsiteButtonMuted,
} from "@/lib/mailer-layout";
import { SectionBox } from "./SectionBox";
import type { CandidateCardData } from "@/content/mailer";
import { mailerPillHref } from "@/lib/mailer-url";

function HeadingLines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <div key={`${i}-${line}`}>{line}</div>
      ))}
    </>
  );
}

export function CandidateCard({ data }: { data: CandidateCardData }) {
  const websiteHref = data.website ? mailerPillHref(data.website) : null;

  return (
    <SectionBox className="h-full overflow-hidden">
      <div className={mailerPortraitRow}>
        <div className={mailerPhotoFrame}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover object-top"
            sizes={mailerPhotoSizes}
          />
          <div className={mailerPhotoRing} />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-center gap-3 text-center">
          <div className="flex flex-col gap-1">
            <div className={`${mailerPortraitKickerSlot} leading-tight`}>
              <div className={mailerKicker}>
                <HeadingLines text={data.heading} />
              </div>
            </div>
            <div className={mailerPortraitNameSlot}>
              <div className={mailerCardTitle}>{data.name}</div>
              {data.subheading ? (
                <div className="mt-1 text-[12px] font-semibold text-[var(--muted)]">
                  {data.subheading}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[15px] leading-relaxed text-[var(--fg)]/92 md:text-[13px] md:leading-snug">
            {data.body.map((p, idx) => {
              const firstLine = p.split("\n")[0] ?? p;
              const isAllCaps =
                firstLine === firstLine.toUpperCase() && firstLine.length > 6;
              return (
                <p
                  key={`${data.id}-p-${idx}`}
                  className={`text-pretty whitespace-pre-line ${
                    isAllCaps
                      ? "font-extrabold tracking-wide text-[var(--fg)]"
                      : "text-[var(--fg)]/88"
                  }`}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {data.website ? (
            <div className="mt-auto w-full pt-2">
              {websiteHref ? (
                <a
                  href={websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={websiteHref}
                  className={`${mailerWebsiteButton} no-underline`}
                >
                  <span className="break-all">{data.website}</span>
                </a>
              ) : (
                <span className={mailerWebsiteButtonMuted}>
                  <span className="break-all">{data.website}</span>
                </span>
              )}
            </div>
          ) : null}

          {data.noticeBox ? (
            <div className="mt-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-[10px] leading-snug text-[var(--fg)]/90">
              <div className="mb-1 text-[10px] font-extrabold tracking-wide text-[var(--fg)]">
                {data.noticeBox.title}
              </div>
              <div className="text-pretty whitespace-pre-line">{data.noticeBox.text}</div>
            </div>
          ) : null}

          {data.footnote ? (
            <div className="text-[10px] text-[var(--muted)]">{data.footnote}</div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}

