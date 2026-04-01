import Image from "next/image";
import {
  mailerCardHeaderBlock,
  mailerCardTextCol,
  mailerCardTitle,
  mailerKicker,
  mailerPhotoFrame,
  mailerPhotoRing,
  mailerPhotoSizes,
  mailerPortraitKickerSlot,
  mailerPortraitNameSlot,
  mailerPortraitPhotoCol,
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
    <SectionBox className="h-full overflow-hidden transition-shadow hover:shadow-[var(--shadow-md)]">
      <div className={mailerPortraitRow}>
        <div className={`${mailerPhotoFrame} ${mailerPortraitPhotoCol} shadow-[var(--shadow-sm)]`}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover object-top"
            sizes={mailerPhotoSizes}
          />
          <div className={mailerPhotoRing} />
        </div>

        <div className={mailerCardTextCol}>
          <div className="flex min-h-0 flex-1 flex-col gap-4">
            <div className={mailerCardHeaderBlock}>
              <div className={`${mailerPortraitKickerSlot}`}>
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

            <div className="flex min-h-0 flex-1 flex-col gap-2.5 text-[13px] leading-[1.55] text-[var(--fg)]/90">
              {data.body.map((p, idx) => {
                const firstLine = p.split("\n")[0] ?? p;
                const isAllCaps =
                  firstLine === firstLine.toUpperCase() && firstLine.length > 6;
                return (
                  <p
                    key={`${data.id}-p-${idx}`}
                    className={`text-pretty whitespace-pre-line ${
                      isAllCaps
                        ? "border-l-[3px] border-[var(--accent)]/85 pl-3 text-[12px] font-extrabold uppercase tracking-wide text-[var(--fg)] md:text-[11px]"
                        : "text-[var(--fg)]/88"
                    }`}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </div>

          {data.website || data.noticeBox || data.footnote ? (
            <div className="flex shrink-0 flex-col gap-4">
              {data.website ? (
                <div className="w-full border-t border-[var(--border)] pt-4">
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
                <div className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-[10px] leading-snug text-[var(--fg)]/90">
                  <div className="mb-1 text-[10px] font-extrabold uppercase tracking-wide text-[var(--fg)]">
                    {data.noticeBox.title}
                  </div>
                  <div className="text-pretty whitespace-pre-line">{data.noticeBox.text}</div>
                </div>
              ) : null}

              {data.footnote ? (
                <div className="text-[10px] leading-snug text-[var(--muted)]">{data.footnote}</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}
