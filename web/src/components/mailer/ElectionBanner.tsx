import { mailerContainer } from "@/lib/mailer-layout";

export function ElectionBanner({
  left,
  rightTop,
  rightBottom,
}: {
  left: string;
  rightTop: string;
  rightBottom: string;
}) {
  return (
    <div className="election-banner-wrap relative overflow-hidden bg-[linear-gradient(90deg,rgba(242,204,60,0.95),rgba(242,204,60,0.72))] text-[var(--fg)]">
      <div className={`relative z-[1] ${mailerContainer} py-4`}>
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div
            className="text-balance font-[var(--font-heading)] text-[17px] tracking-[0.06em] sm:text-[18px] md:text-[22px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {left}
          </div>
          <div className="flex flex-col gap-1 text-[13px] font-extrabold tracking-wide md:items-end md:text-right md:text-[13px]">
            <div>{rightTop}</div>
            <div>{rightBottom}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

