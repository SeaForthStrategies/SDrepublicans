/**
 * Shared layout classes for the mailer site (static strings so Tailwind can detect them).
 *
 * Horizontal rhythm: max-width + safe-area-aware horizontal padding on every band.
 * Card rhythm: slightly tighter padding on small phones; gap scales at md+.
 */

/** Respects notched devices; keeps at least 1rem inset */
export const mailerPageX =
  "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerContainer =
  "mx-auto w-full max-w-[1120px] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerSectionTop = "pt-8 md:pt-16";

/** Hero / header vertical band (taller than body sections) */
export const mailerHeaderInner =
  "relative mx-auto w-full max-w-[1120px] py-6 md:py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerMainInner =
  "relative mx-auto w-full max-w-[1120px] py-5 md:py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerStack = "space-y-4 md:space-y-6";

/** Space between cards in a section grid */
export const mailerGridGap = "gap-5 md:gap-6";

/** Header / hero row spacing */
export const mailerHeaderBlockGap = "gap-4 md:gap-6";

/** Shared hero brand + headline (HeaderBanner + optional chairman strip) */
export const mailerHeroLogoBox =
  "relative h-[48px] w-[80px] shrink-0 sm:h-[52px] sm:w-[86px] md:h-[64px] md:w-[104px]";

export const mailerHeroBrandTop =
  "font-[var(--font-heading)] text-[clamp(1.5rem,5.5vw+0.35rem,1.875rem)] tracking-[0.16em] md:text-[40px] md:tracking-[0.18em]";

export const mailerHeroBrandBottom =
  "font-[var(--font-heading)] text-[clamp(0.9375rem,3.5vw+0.25rem,1.0625rem)] tracking-[0.5em] text-white/90 md:text-[22px] md:tracking-[0.58em]";

export const mailerHeroAccentBar =
  "h-[4px] w-16 shrink-0 rounded-full bg-[var(--accent)] sm:w-20 md:w-28";

export const mailerHeroHeadline =
  "text-balance whitespace-pre-line font-[var(--font-heading)] text-[clamp(1.875rem,7vw+0.25rem,2.375rem)] leading-[1.05] tracking-[0.02em] md:text-[64px] md:leading-[1.02]";

export const mailerHeroWebsite =
  "text-[15px] font-extrabold tracking-wide text-white/90";

/** Inner padding for SectionBox content (cards, info, endorsement rows) */
export const mailerCardPadding = "p-4 sm:p-5 md:p-6";

/** Shared quote / endorsement text panel */
export const mailerQuoteBox =
  "text-pretty whitespace-pre-line rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-[15px] font-semibold leading-snug text-[var(--fg)]/92 md:py-2";

/** Website / URL chip (min ~44px tap height on small screens) */
export const mailerWebsitePill =
  "inline-flex min-h-[44px] min-w-0 max-w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-[14px] font-extrabold tracking-wide text-[var(--primary)] sm:min-h-0 sm:px-3 sm:py-1 sm:text-[13px]";

/** Red kicker line (office, “A message from”, etc.) */
export const mailerKicker =
  "text-[13px] font-extrabold tracking-wide text-[var(--accent)] md:text-[12px]";

/**
 * Portrait cards (candidate / endorsement / message): shared vertical slots so
 * kickers and names line up across columns in the same grid row.
 */
export const mailerPortraitKickerSlot =
  "flex min-h-[4.25rem] shrink-0 flex-col justify-start leading-snug sm:min-h-[4.5rem] md:min-h-[4.75rem]";

export const mailerPortraitNameSlot =
  "flex min-h-[3.25rem] flex-col justify-start sm:min-h-[3.5rem] md:min-h-[3.75rem]";

/** Candidate name + endorsement title (same scale) */
export const mailerCardTitle =
  "text-[17px] font-extrabold tracking-tight text-[var(--fg)] sm:text-[18px] md:text-[22px]";

/** Message panel title (same typography as candidate names for row alignment) */
export const mailerMessageTitle = mailerCardTitle;

/** Page meta strip (website + quote line) inside MailerPage */
export const mailerMetaStrip =
  "mb-5 flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 text-center text-[13px] leading-snug shadow-[var(--shadow-sm)] md:flex-row md:items-center md:justify-between md:gap-2 md:text-left md:text-[12px]";

/** Optional section divider */
export const mailerSectionDivider =
  "mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(18,58,138,0.22),rgba(207,31,45,0.12),transparent)]";

/**
 * Portrait photo column + copy (candidate cards, message panels).
 * Fixed photo width keeps rows aligned in multi-column grids; items-start avoids stretched frames.
 */
export const mailerPortraitRow =
  "grid h-full min-w-0 grid-cols-[minmax(0,108px),1fr] items-start gap-3 p-4 sm:grid-cols-[120px,1fr] sm:gap-4 sm:p-5 md:grid-cols-[176px,1fr] md:gap-6 md:p-6";

/** Standard framed 3:4 portrait slot */
export const mailerPhotoFrame =
  "relative aspect-[3/4] w-full max-w-[108px] shrink-0 self-start overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:max-w-[120px] md:max-w-none md:w-[176px]";

/** Portrait slot without border (e.g. composite crop / cutout look) */
export const mailerPhotoFrameCutout =
  "relative aspect-[3/4] w-full max-w-[108px] shrink-0 self-start overflow-hidden rounded-[var(--radius-md)] bg-transparent sm:max-w-[120px] md:max-w-none md:w-[176px]";

export const mailerPhotoRing =
  "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10";

/** Flyer-style portrait columns (3:4) for candidate / message photos */
export const mailerPhotoSizes =
  "(max-width: 767px) 108px, (min-width: 768px) 176px";

export const mailerLogoSizes = "(max-width: 767px) 80px, (min-width: 768px) 104px";

/** Header Issa + Trump portrait (hero; larger than card column) */
export const mailerTrumpSizes = "(max-width: 767px) 136px, (min-width: 768px) 200px";

/** Chairman circular headshot (endorsements band) */
export const mailerChairmanSizes = "(max-width: 767px) 160px, (min-width: 768px) 188px";
