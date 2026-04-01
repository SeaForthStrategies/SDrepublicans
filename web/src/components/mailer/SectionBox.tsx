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
        "relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] transition-shadow duration-200",
        className,
      )}
    >
      {children}
    </section>
  );
}

