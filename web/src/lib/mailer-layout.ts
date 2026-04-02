/**
 * Layout tokens for the mailer site.
 *
 * Portrait cards (candidate + endorsement): classes are defined ONLY in
 * `src/app/mailer-cards.css` — import via globals.css. Do not duplicate
 * card spacing/typography in Tailwind strings here.
 */

/** Respects notched devices; keeps at least 1rem inset */
export const mailerPageX =
  "pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerContainer =
  "mx-auto w-full max-w-[1120px] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerSectionTop = "pt-5 md:pt-10";

export const mailerMainInner =
  "relative mx-auto w-full max-w-[1120px] py-8 md:py-11 lg:py-12 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]";

export const mailerStack = "space-y-10 md:space-y-12 lg:space-y-14";

/** Space between cards in a section grid */
export const mailerGridGap = "gap-6 md:gap-7";

/** Inner padding for SectionBox content (cards, info, endorsement rows) */
export const mailerCardPadding = "p-5 sm:p-6 md:p-7";

/* --- Portrait cards: global CSS (`mailer-cards.css`) --- */

/** Outer portrait card (stack layout) */
export const mailerPortraitCard = "mailer-portrait-card";
export const mailerPortraitCardTop = "mailer-portrait-card__top";
export const mailerPortraitCardPhoto = "mailer-portrait-card__photo";
/** Split-layout photo column: full-height frame on md+ */
export const mailerPortraitCardPhotoSplit = "mailer-portrait-card__photo--split";
export const mailerPortraitCardHead = "mailer-portrait-card__head";
export const mailerPortraitCardBody = "mailer-portrait-card__body";
export const mailerPortraitCardFooter = "mailer-portrait-card__footer";
/** Desktop 3-up subgrid: same regions as PortraitMailerCard */
export const mailerDeskColPhoto = "mailer-endorsements-desk-col__photo";
export const mailerDeskColHead = "mailer-endorsements-desk-col__head";
export const mailerDeskColRule = "mailer-endorsements-desk-col__rule";
export const mailerDeskColBody = "mailer-endorsements-desk-col__body";
export const mailerDeskColFoot = "mailer-endorsements-desk-col__foot";
export const mailerCardHeaderBlock = "mailer-card-header-block";
export const mailerPortraitKickerSlot = "mailer-portrait-kicker-slot";
export const mailerPortraitNameSlot = "mailer-portrait-name-slot";
export const mailerKicker = "mailer-kicker";
export const mailerCardTitle = "mailer-card-title";
export const mailerMessageTitle = "mailer-message-title";
export const mailerQuoteBox = "mailer-quote-box";
/** @deprecated No-op; quote body never flexes into row height. */
export const mailerQuoteBoxGrow = "mailer-quote-box--grow";
export const mailerQuoteBody = "mailer-quote-body";
export const mailerCardPara = "mailer-card-para";
export const mailerCardParaCaps = "mailer-card-para mailer-card-para--caps";
export const mailerCardFooterBand = "mailer-card-footer-band";
export const mailerPhotoFrame = "mailer-photo-frame";
/** With split layout: frame fills stretched photo column */
export const mailerPhotoFrameSplitFull = "mailer-photo-frame--split-full";
export const mailerPhotoFrameCutout = "mailer-photo-frame-cutout";
export const mailerPhotoRing = "mailer-photo-ring";
export const mailerWebsiteButton = "mailer-card-url-button";
export const mailerWebsiteButtonMuted = "mailer-card-url-button-muted";
export const mailerWebsiteButtonWrap = "mailer-card-url-button-wrap";
export const mailerCardUrlLabel = "mailer-card-url-label";
export const mailerFooterByline = "mailer-footer-byline";
export const mailerCardShell = "mailer-card-shell";
export const mailerSubgridNameRow = "mailer-subgrid-name-row";
export const mailerCardNotice = "mailer-card-notice";
export const mailerCardNoticeTitle = "mailer-card-notice-title";
export const mailerCardNoticeBody = "mailer-card-notice-body";
export const mailerCardFootnote = "mailer-card-footnote";
export const mailerCardSubheading = "mailer-card-subheading";

/** Page meta strip (website + quote line) inside MailerPage — aligns with page gutter */
export const mailerMetaStrip =
  "mb-7 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-left text-[clamp(0.9375rem,0.45vw+0.75rem,1.0625rem)] leading-relaxed shadow-[var(--shadow-sm)] sm:px-5 sm:py-5 md:px-6 md:text-[clamp(1rem,0.4vw+0.7rem,1.125rem)]";

/** Section titles (Endorsements / Candidates) — label + accent, flush with content column */
export const mailerSectionTitleWrap =
  "flex w-full min-w-0 flex-col items-start gap-2";

export const mailerSectionTitleText =
  "w-full text-left font-[var(--font-heading)] text-[clamp(1.125rem,1.85vw+0.55rem,1.625rem)] font-bold uppercase tracking-[0.14em] text-[var(--primary)] sm:tracking-[0.16em] md:tracking-[0.2em]";

export const mailerSectionTitleRule =
  "h-px w-20 shrink-0 rounded-full bg-[linear-gradient(90deg,transparent,rgba(18,58,138,0.55),rgba(242,204,60,0.85),rgba(18,58,138,0.55),transparent)] opacity-95 sm:w-24 md:w-28";

/** Optional section divider */
export const mailerSectionDivider =
  "mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(18,58,138,0.22),rgba(242,204,60,0.14),transparent)]";

/** Website / URL chip (min ~44px tap height on small screens) */
export const mailerWebsitePill =
  "inline-flex min-h-[48px] min-w-0 max-w-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-[clamp(0.9375rem,0.35vw+0.8rem,1.0625rem)] font-extrabold tracking-wide text-[var(--primary)] sm:min-h-[44px] sm:px-4 sm:py-2 sm:text-[clamp(0.9375rem,0.3vw+0.75rem,1rem)]";

/** Flyer-style portrait columns (3:4) for candidate / message photos */
export const mailerPhotoSizes =
  "(max-width: 639px) 84px, (max-width: 767px) 100px, (min-width: 768px) 112px";

/** Logo / masthead image `sizes` for next/image */
export const mailerLogoSizes =
  "(max-width: 639px) 152px, (max-width: 767px) 176px, (min-width: 768px) 204px";

/** Chairman headshot */
export const mailerChairmanSizes = "(max-width: 767px) 96px, (min-width: 768px) 104px";
