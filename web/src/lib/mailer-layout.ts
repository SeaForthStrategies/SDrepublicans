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

export const mailerSectionTop = "pt-5 md:pt-10";

/** Hero / header vertical band (taller than body sections) */
export const mailerHeaderInner =
  "relative mx-auto w-full max-w-[1120px] py-6 md:py-9 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerMainInner =
  "relative mx-auto w-full max-w-[1120px] py-7 md:py-10 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerStack = "space-y-9 md:space-y-11";

/** Space between cards in a section grid */
export const mailerGridGap = "gap-6 md:gap-7";

/** Header / hero row spacing */
export const mailerHeaderBlockGap = "gap-5 md:gap-7";

/** Shared hero brand + headline (HeaderBanner + optional chairman strip) */
export const mailerHeroLogoBox =
  "relative h-[40px] w-[68px] shrink-0 sm:h-[44px] sm:w-[74px] md:h-[48px] md:w-[80px]";

export const mailerHeroBrandTop =
  "font-[var(--font-heading)] text-[clamp(1.25rem,4vw+0.35rem,1.5rem)] tracking-[0.14em] md:text-[28px] md:tracking-[0.16em]";

export const mailerHeroBrandBottom =
  "font-[var(--font-heading)] text-[clamp(0.8125rem,2.5vw+0.2rem,0.9375rem)] tracking-[0.42em] text-white/90 md:text-[16px] md:tracking-[0.5em]";

export const mailerHeroAccentBar =
  "h-[3px] w-12 shrink-0 rounded-full bg-[var(--accent)] sm:w-16 md:w-20";

export const mailerHeroHeadline =
  "text-balance whitespace-pre-line font-[var(--font-heading)] text-[clamp(1.5rem,5vw+0.35rem,2rem)] leading-[1.08] tracking-[0.02em] md:text-[clamp(1.75rem,3.5vw+0.5rem,2.375rem)] md:leading-[1.06]";

export const mailerHeroWebsite =
  "text-[15px] font-extrabold tracking-wide text-white/90";

/** Inner padding for SectionBox content (cards, info, endorsement rows) */
export const mailerCardPadding = "p-4 sm:p-5 md:p-6";

/** Text column inside portrait cards — single vertical rhythm */
export const mailerCardTextCol =
  "flex h-full min-h-0 min-w-0 flex-col gap-4 text-left";

/** Left photo column: stay top-aligned while the text column stretches to row height */
export const mailerPortraitPhotoCol = "self-start";

/** Kicker + title row (shared by candidate / endorsement / message) */
export const mailerCardHeaderBlock =
  "flex w-full flex-col gap-1 border-b border-[var(--border)] pb-3.5 sm:gap-1.5 sm:pb-4";

/** Shared quote / endorsement text panel — left-aligned for scanability */
export const mailerQuoteBox =
  "text-pretty whitespace-pre-line rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-3 text-left text-[13px] font-medium leading-[1.6] text-[var(--fg)]/92 shadow-[var(--shadow-xs)] sm:px-4 sm:py-3.5";

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
  "flex min-h-0 shrink-0 flex-col items-start justify-center text-left leading-snug";

export const mailerPortraitNameSlot =
  "flex min-h-0 flex-col items-start justify-center text-left";

/** Candidate name + endorsement title (same scale) */
export const mailerCardTitle =
  "text-[16px] font-extrabold tracking-tight text-[var(--fg)] sm:text-[17px] md:text-[18px]";

/** Message panel title (same typography as candidate names for row alignment) */
export const mailerMessageTitle = mailerCardTitle;

/** Page meta strip (website + quote line) inside MailerPage */
export const mailerMetaStrip =
  "mb-7 flex flex-col items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-center text-[13px] leading-relaxed shadow-[var(--shadow-sm)] md:gap-2.5 md:px-6 md:py-4 md:text-[12px]";

/** Section titles (Endorsements / Candidates) — label + accent */
export const mailerSectionTitleWrap = "flex flex-col items-center gap-2";

export const mailerSectionTitleText =
  "text-center font-[var(--font-heading)] text-[clamp(0.8125rem,1.5vw+0.5rem,0.9375rem)] font-bold uppercase tracking-[0.22em] text-[var(--primary)] md:tracking-[0.26em]";

export const mailerSectionTitleRule =
  "h-px w-16 rounded-full bg-[linear-gradient(90deg,transparent,rgba(207,31,45,0.85),rgba(242,204,60,0.9),rgba(18,58,138,0.75),transparent)] opacity-95 md:w-20";

/** Optional section divider */
export const mailerSectionDivider =
  "mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(18,58,138,0.22),rgba(207,31,45,0.12),transparent)]";

/**
 * Portrait photo column + copy. Narrow photo column on mobile leaves room for text.
 */
export const mailerPortraitRow =
  "grid h-full min-w-0 grid-cols-[minmax(0,80px),1fr] items-stretch gap-3.5 p-4 sm:grid-cols-[minmax(0,96px),1fr] sm:gap-4 sm:p-5 md:grid-cols-[minmax(0,108px),1fr] md:gap-5";

/** Standard framed 3:4 portrait slot */
export const mailerPhotoFrame =
  "relative aspect-[3/4] w-full max-w-[80px] shrink-0 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-3)] shadow-[var(--shadow-xs)] sm:max-w-[96px] md:max-w-[108px]";

/** Portrait slot without border (e.g. composite crop / cutout look) */
export const mailerPhotoFrameCutout =
  "relative aspect-[3/4] w-full max-w-[80px] shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-transparent sm:max-w-[96px] md:max-w-[108px]";

export const mailerPhotoRing =
  "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10";

/** Flyer-style portrait columns (3:4) for candidate / message photos */
export const mailerPhotoSizes =
  "(max-width: 639px) 80px, (max-width: 767px) 96px, (min-width: 768px) 108px";

export const mailerLogoSizes = "(max-width: 767px) 68px, (min-width: 768px) 80px";

/** Header Issa + Trump portrait — sized for md+ to match hero column height */
export const mailerTrumpSizes =
  "(max-width: 767px) 224px, (min-width: 768px) 336px";

/** Chairman headshot */
export const mailerChairmanSizes = "(max-width: 767px) 96px, (min-width: 768px) 104px";
