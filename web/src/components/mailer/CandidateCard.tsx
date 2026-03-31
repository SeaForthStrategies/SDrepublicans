import Image from "next/image";
import { SectionBox } from "./SectionBox";
import type { CandidateCardData } from "@/content/mailer";

function HeadingLines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line) => (
        <div key={line}>{line}</div>
      ))}
    </>
  );
}

export function CandidateCard({ data }: { data: CandidateCardData }) {
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className="grid h-full grid-cols-[120px,1fr] gap-3 p-3 md:grid-cols-[150px,1fr] md:gap-4 md:p-4">
        <div className="relative overflow-hidden rounded-md border border-black/10 bg-[var(--rl-soft)]">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 150px, 120px"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-2">
          <div className="leading-tight">
            <div className="text-[12px] font-extrabold text-[var(--rl-red)]">
              <HeadingLines text={data.heading} />
            </div>
            <div className="text-[18px] font-extrabold text-[var(--rl-blue)] md:text-[20px]">
              {data.name}
            </div>
            {data.subheading ? (
              <div className="text-[12px] font-semibold text-black/80">
                {data.subheading}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-1 text-[12.5px] leading-snug text-black md:text-[13px]">
            {data.body.map((p, idx) => {
              const isAllCaps = p === p.toUpperCase() && p.length > 6;
              return (
                <p
                  key={`${data.id}-p-${idx}`}
                  className={isAllCaps ? "font-extrabold tracking-wide" : ""}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {data.website ? (
            <div className="mt-auto text-right text-[13px] font-extrabold text-[var(--rl-blue)]">
              {data.website}
            </div>
          ) : null}

          {data.noticeBox ? (
            <div className="mt-2 rounded-md border border-black/10 bg-white px-3 py-2 text-[10px] leading-snug text-black/90">
              <div className="mb-1 text-[10px] font-extrabold">
                {data.noticeBox.title}
              </div>
              <div>{data.noticeBox.text}</div>
            </div>
          ) : null}

          {data.footnote ? (
            <div className="text-[10px] text-black/70">{data.footnote}</div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}

