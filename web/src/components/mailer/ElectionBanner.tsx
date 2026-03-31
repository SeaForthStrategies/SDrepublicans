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
    <div className="bg-[var(--rl-yellow)] text-[var(--rl-ink)]">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-2">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div
            className="font-[var(--font-heading)] text-[22px] tracking-wide md:text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {left}
          </div>
          <div className="flex flex-col md:items-end">
            <div className="text-[14px] font-extrabold tracking-wide md:text-[15px]">
              {rightTop}
            </div>
            <div className="text-[14px] font-extrabold tracking-wide md:text-[15px]">
              {rightBottom}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

