export function FooterCTA({ text }: { text: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[linear-gradient(135deg,var(--accent)_0%,#a61220_55%,#8f0f1c_100%)] px-5 py-6 text-center text-[14px] font-extrabold leading-relaxed tracking-wide text-white shadow-[var(--shadow-md)] md:px-8 md:py-7">
      <div className="mx-auto max-w-[52ch] text-balance">{text}</div>
    </div>
  );
}

