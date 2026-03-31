import Image from "next/image";
import {
  mailerCardPadding,
  mailerChairmanSizes,
  mailerHeaderInner,
} from "@/lib/mailer-layout";

/** Chairman photo + quote before the Endorsements block (single-page layout). */
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
    <header className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#071027_0%,var(--primary-2)_40%,#0b1220_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />

      <div className={mailerHeaderInner}>
        <div
          className={`flex w-full max-w-[920px] flex-col gap-4 border border-white/20 bg-white/10 md:flex-row md:items-center md:gap-5 ${mailerCardPadding}`}
        >
          <div className="relative mx-auto h-[160px] w-[160px] shrink-0 overflow-hidden rounded-full border-2 border-white/35 bg-[#0d1830] md:mx-0 md:h-[188px] md:w-[188px]">
            <Image
              src={chairmanImageSrc}
              alt={chairmanImageAlt}
              fill
              className="object-cover object-[50%_22%]"
              sizes={mailerChairmanSizes}
              priority
            />
          </div>
          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="text-pretty whitespace-pre-line text-[13px] font-semibold italic leading-snug text-white/90 md:text-[14px]">
              {quote}
            </p>
            <p className="mt-2.5 whitespace-pre-line text-[12px] font-extrabold tracking-wide text-white md:text-[13px]">
              {byline}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
