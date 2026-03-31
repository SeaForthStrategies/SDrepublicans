import Image from "next/image";

export function HeaderBanner({
  logoSrc,
  headline,
  primaryWebsite,
}: {
  logoSrc: string;
  headline: string;
  primaryWebsite: string;
}) {
  return (
    <header className="bg-[var(--rl-blue)] text-white">
      <div className="mx-auto w-full max-w-[1120px] px-4 pt-5 pb-3">
        <div className="grid grid-cols-[auto,1fr] items-end gap-4 md:gap-6">
          <div className="flex items-end gap-3">
            <div className="relative h-[58px] w-[92px] shrink-0 md:h-[74px] md:w-[120px]">
              <Image
                src={logoSrc}
                alt="Republican Leadership logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-none">
              <div
                className="font-[var(--font-heading)] text-[30px] tracking-[0.14em] md:text-[40px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                REPUBLICAN
              </div>
              <div className="-mt-1 flex items-center gap-2">
                <div
                  className="font-[var(--font-heading)] text-[18px] tracking-[0.55em] md:text-[22px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  LEADERSHIP
                </div>
                <div className="h-[6px] w-20 rounded bg-[var(--rl-red)] md:w-28" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 text-right">
            <div
              className="font-[var(--font-heading)] text-[30px] leading-[1.05] tracking-[0.04em] md:text-[48px]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {headline}
            </div>
            <div className="text-[12px] font-semibold tracking-wide md:text-[14px]">
              {primaryWebsite}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

