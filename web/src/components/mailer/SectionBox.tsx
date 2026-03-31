import { cn } from "@/lib/cn";

export function SectionBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-md border border-black/15 bg-[var(--rl-paper)] shadow-[0_1px_0_rgba(0,0,0,0.06)]",
        className,
      )}
    >
      {children}
    </section>
  );
}

