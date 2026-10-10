import { LucideIcon } from '@lucide/angular';

export interface Project {
  title: string;
  /** Short label shown on the card visual. */
  label: string;
  type: string;
  summary: string;
  tags: readonly string[];
  icon: LucideIcon;
  /** Live site. When set, the card links to it instead of the contact section. */
  url?: string;
}
