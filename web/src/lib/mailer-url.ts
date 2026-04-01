/**
 * Turn a mailer pill label (host or full URL) into a safe https URL.
 */
export function mailerPillHref(label: string): string | null {
  const s = label.trim();
  if (!s || /\s/.test(s)) return null;
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

/**
 * Prefer explicit href (optional); otherwise derive from display label.
 */
export function mailerExplicitOrPillHref(
  urlHref: string | undefined,
  urlText: string,
): string | null {
  const explicit = urlHref?.trim();
  if (explicit) {
    return /^https?:\/\//i.test(explicit) ? explicit : `https://${explicit}`;
  }
  return mailerPillHref(urlText);
}

/** Display label (e.g. `EXAMPLE.COM`) → https URL */
export function mailerDisplayWebsiteHref(display: string): string {
  const t = display.trim().toLowerCase().replace(/^https?:\/\//i, "");
  return `https://${t}`;
}
