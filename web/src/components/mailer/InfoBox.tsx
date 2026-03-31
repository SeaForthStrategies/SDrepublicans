import { SectionBox } from "./SectionBox";
import type { InfoBoxData } from "@/content/mailer";

export function InfoBox({ data }: { data: InfoBoxData }) {
  return (
    <SectionBox className="h-full overflow-hidden">
      <div className="p-3 md:p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="rounded bg-[var(--rl-red)] px-2 py-1 text-[12px] font-extrabold text-white">
            {data.title}
          </div>
        </div>

        <div className="space-y-2 text-[12.5px] leading-snug text-black md:text-[13px]">
          {data.bullets.map((b, idx) => (
            <p key={`${data.id}-${idx}`} className={idx === 0 ? "font-semibold" : ""}>
              {b}
            </p>
          ))}
        </div>

        <div className="mt-3 rounded-md bg-[var(--rl-red)] px-3 py-2 text-center text-[13px] font-extrabold text-white">
          {data.cta}
        </div>
      </div>
    </SectionBox>
  );
}

