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

export const mailerSectionTop = "pt-6 md:pt-14";

/** Hero / header vertical band (taller than body sections) */
export const mailerHeaderInner =
  "relative mx-auto w-full max-w-[1120px] py-7 md:py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerMainInner =
  "relative mx-auto w-full max-w-[1120px] py-8 md:py-14 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerStack = "space-y-8 md:space-y-10";

/** Space between cards in a section grid */
export const mailerGridGap = "gap-6 md:gap-7";

/** Header / hero row spacing */
export const mailerHeaderBlockGap = "gap-5 md:gap-7";

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
  "text-pretty whitespace-pre-line rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-3 text-center text-[15px] font-semibold leading-relaxed text-[var(--fg)]/92 shadow-[var(--shadow-xs)] md:px-4 md:py-2.5 md:leading-snug";

/** Website / URL chip (min ~44px tap height on small screens) */
export const mailerWebsitePill =
  "inline-flex min-h-[44px] min-w-0 max-w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-[14px] font-extrabold tracking-wide text-[var(--primary)] sm:min-h-0 sm:px-3 sm:py-1 sm:text-[13px]";

/** Primary card link: full-width button look; URL is the label (wrap long hosts). */
export const mailerWebsiteButton =
  "relative z-10 inline-flex w-full min-h-[44px] min-w-0 cursor-pointer items-center justify-center rounded-[var(--radius-md)] border border-[var(--primary-2)]/25 bg-[var(--primary)] px-3 py-2.5 text-center text-[13px] font-extrabold leading-snug tracking-wide text-white shadow-[var(--shadow-xs)] transition-[filter,transform] hover:brightness-110 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] sm:min-h-[40px] sm:px-4 sm:text-[12px] md:text-[13px]";

/** Non-interactive placeholder when a URL label has no valid href */
export const mailerWebsiteButtonMuted =
  "inline-flex w-full min-h-[44px] min-w-0 cursor-not-allowed items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-center text-[13px] font-extrabold leading-snug tracking-wide text-[var(--muted)] sm:min-h-[40px] sm:px-4 sm:text-[12px]";

/** Red kicker line (office, “A message from”, etc.) */
export const mailerKicker =
  "text-[13px] font-extrabold tracking-wide text-[var(--accent)] md:text-[12px]";

/**
 * Portrait cards (candidate / endorsement / message): shared vertical slots so
 * kickers and names line up across columns in the same grid row.
 */
export const mailerPortraitKickerSlot =
  "flex min-h-[4.25rem] shrink-0 flex-col items-center justify-center text-center leading-snug sm:min-h-[4.5rem] md:min-h-[4.75rem]";

export const mailerPortraitNameSlot =
  "flex min-h-[3.25rem] flex-col items-center justify-center text-center sm:min-h-[3.5rem] md:min-h-[3.75rem]";

/** Candidate name + endorsement title (same scale) */
export const mailerCardTitle =
  "text-[17px] font-extrabold tracking-tight text-[var(--fg)] sm:text-[18px] md:text-[22px]";

/** Message panel title (same typography as candidate names for row alignment) */
export const mailerMessageTitle = mailerCardTitle;

/** Page meta strip (website + quote line) inside MailerPage */
export const mailerMetaStrip =
  "mb-7 flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-center text-[13px] leading-relaxed shadow-[var(--shadow-sm)] md:gap-2.5 md:px-6 md:py-4 md:text-[12px]";

/** Section titles (Endorsements / Candidates) — label + accent */
export const mailerSectionTitleWrap = "mb-1 flex flex-col items-center gap-3";

export const mailerSectionTitleText =
  "text-center font-[var(--font-heading)] text-[13px] font-extrabold uppercase tracking-[0.2em] text-[var(--accent)] md:text-[12px]";

export const mailerSectionTitleRule =
  "h-px w-16 rounded-full bg-[linear-gradient(90deg,transparent,rgba(207,31,45,0.85),rgba(242,204,60,0.9),rgba(18,58,138,0.75),transparent)] opacity-95 md:w-20";

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
  "relative mx-auto aspect-[3/4] w-full max-w-[108px] shrink-0 self-start overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:max-w-[120px] md:max-w-none md:w-[176px]";

/** Portrait slot without border (e.g. composite crop / cutout look) */
export const mailerPhotoFrameCutout =
  "relative mx-auto aspect-[3/4] w-full max-w-[108px] shrink-0 self-start overflow-hidden rounded-[var(--radius-md)] bg-transparent sm:max-w-[120px] md:max-w-none md:w-[176px]";

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
