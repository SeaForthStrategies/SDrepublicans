import Image from "next/image";
import { SectionBox } from "./SectionBox";
import type { MessagePanelData } from "@/content/mailer";

export function MessagePanel({ data }: { data: MessagePanelData }) {
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className="grid h-full grid-cols-[140px,1fr] gap-3 p-3 md:grid-cols-[170px,1fr] md:gap-4 md:p-4">
        <div className="relative overflow-hidden rounded-md border border-black/10 bg-[var(--rl-soft)]">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 170px, 140px"
          />
        </div>

        <div className="flex flex-col justify-between gap-2">
          <div>
            <div className="text-[12px] font-extrabold text-[var(--rl-red)]">
              {data.kicker}
            </div>
            <div className="text-[16px] font-extrabold text-[var(--rl-blue)] md:text-[18px]">
              {data.title}
            </div>
          </div>
          <div className="rounded-md bg-[var(--rl-soft)] px-3 py-2 text-[14px] font-semibold leading-snug text-black md:text-[15px]">
            {data.quote}
          </div>
        </div>
      </div>
    </SectionBox>
  );
}

