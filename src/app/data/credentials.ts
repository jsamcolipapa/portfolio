import { LucideAward, LucideBookOpen, LucideGraduationCap } from '@lucide/angular';
import { Credential } from '../core/models/credential.model';

// TODO before publishing: replace each `null` with a verified detail, e.g.
// 'Certification name — Issuer, 2025'. Do not list anything unverified.
export const CREDENTIALS: readonly Credential[] = [
  { category: 'Professional Certifications', detail: null, icon: LucideAward },
  { category: 'Education', detail: null, icon: LucideGraduationCap },
  { category: 'Additional Training', detail: null, icon: LucideBookOpen },
];
