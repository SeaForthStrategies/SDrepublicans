import Image from "next/image";
import { SectionBox } from "./SectionBox";

export function EndorsementCard({
  image,
  quote,
  byline,
  titleKicker,
  title,
  urlText,
}: {
  image: { src: string; alt: string };
  quote: string;
  byline?: string;
  titleKicker?: string;
  title?: string;
  urlText?: string;
}) {
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className="grid gap-3 p-3 md:grid-cols-[190px,1fr] md:gap-4 md:p-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-black/10 bg-[var(--rl-soft)] md:aspect-auto md:h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 190px, 100vw"
          />
        </div>

        <div className="flex flex-col gap-2">
          {titleKicker ? (
            <div className="text-[12px] font-extrabold text-[var(--rl-red)]">
              {titleKicker}
            </div>
          ) : null}
          {title ? (
            <div className="text-[18px] font-extrabold text-[var(--rl-blue)]">
              {title}
            </div>
          ) : null}
          <div className="rounded-md bg-[var(--rl-soft)] px-3 py-2 text-[14px] font-semibold leading-snug text-black md:text-[15px]">
            {quote}
          </div>
          {urlText ? (
            <div className="text-right text-[13px] font-extrabold text-[var(--rl-blue)]">
              {urlText}
            </div>
          ) : null}
          {byline ? (
            <div className="text-[12px] font-extrabold tracking-wide text-[var(--rl-blue)]">
              {byline}
            </div>
          ) : null}
        </div>
      </div>
    </SectionBox>
  );
}

