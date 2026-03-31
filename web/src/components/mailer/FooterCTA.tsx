export function FooterCTA({ text }: { text: string }) {
  return (
    <div className="bg-[var(--rl-red)] text-white">
      <div className="mx-auto w-full max-w-[1120px] px-4 py-3">
        <div className="text-center text-[13px] font-extrabold tracking-wide md:text-[14px]">
          {text}
        </div>
      </div>
    </div>
  );
}

