import { LucideIcon } from '@lucide/angular';

export interface ContactLink {
  label: string;
  /** `null` until a real, verified address or profile URL is available. */
  href: string | null;
  display: string | null;
  icon: LucideIcon;
}
