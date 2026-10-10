import { LucideIcon } from '@lucide/angular';

export interface ContactLink {
  label: string;
  /** `null` until a real, verified address or profile URL is available. */
  href: string | null;
  display: string | null;
  /**
   * Email address, reversed and base64-encoded. Set only on the email entry, whose
   * `href` and `display` stay `null` so the address is never in the rendered HTML
   * until a visitor asks for it.
   */
  encodedEmail?: string | null;
  icon: LucideIcon;
}
