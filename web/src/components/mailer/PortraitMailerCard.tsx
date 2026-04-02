import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  mailerCardPadding,
  mailerPortraitCard,
  mailerPortraitCardBody,
  mailerPortraitCardFooter,
  mailerPortraitCardHead,
  mailerPortraitCardPhoto,
  mailerPortraitCardTop,
} from "@/lib/mailer-layout";

/**
 * Equal-height row pattern: header row → divider → flex-1 body (fills) → mt-auto footer.
 * No text clipping: body uses min-h-min; quote panel grows with min-height: min-content.
 */
export function PortraitMailerCard({
  photo,
  head,
  body,
  footer,
  className,
}: {
  photo: ReactNode;
  head: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        mailerPortraitCard,
        "flex h-full min-h-0 w-full min-w-0 flex-1 flex-col",
        mailerCardPadding,
        className,
      )}
    >
      <div
        className={cn(
          mailerPortraitCardTop,
          "flex shrink-0 items-start gap-[var(--mailer-photo-text-gap)] pb-[var(--mailer-header-pad-bottom)]",
        )}
      >
        <div className={cn(mailerPortraitCardPhoto, "shrink-0")}>{photo}</div>
        <div className={cn(mailerPortraitCardHead, "min-w-0 flex-1")}>{head}</div>
      </div>

      <div
        className="my-6 shrink-0 border-t border-[var(--border)]"
        aria-hidden="true"
      />

      <div
        className={cn(
          mailerPortraitCardBody,
          "flex min-h-min min-w-0 flex-1 flex-col",
        )}
      >
        {body}
      </div>

      {footer != null ? (
        <div
          className={cn(
            mailerPortraitCardFooter,
            "mt-auto w-full shrink-0 min-w-0",
          )}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}
