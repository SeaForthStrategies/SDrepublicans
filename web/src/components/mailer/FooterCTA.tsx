export function FooterCTA({ text }: { text: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[linear-gradient(90deg,var(--accent),#b31221)] px-5 py-5 text-center text-[14px] font-extrabold leading-snug tracking-wide text-white shadow-[var(--shadow-md)] md:px-6">
      <div className="text-balance">{text}</div>
    </div>
  );
}

