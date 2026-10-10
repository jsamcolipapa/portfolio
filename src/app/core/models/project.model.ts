import { LucideIcon } from '@lucide/angular';

export interface Project {
  title: string;
  /** Short label shown on the card visual. */
  label: string;
  type: string;
  summary: string;
  tags: readonly string[];
  icon: LucideIcon;
}
