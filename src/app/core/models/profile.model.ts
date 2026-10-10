import { LucideIcon } from '@lucide/angular';

export interface TechBadge {
  label: string;
  icon: LucideIcon;
}

export interface Profile {
  givenNames: string;
  familyName: string;
  initials: string;
  role: string;
  focus: readonly string[];
  intro: string;
  tagline: string;
  badges: readonly TechBadge[];
}
