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
        "relative flex h-full min-h-0 w-full min-w-0 flex-col overflow-visible rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-[var(--primary)]/16 hover:shadow-[var(--shadow-md)] motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </section>
  );
}

