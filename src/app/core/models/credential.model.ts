import { LucideIcon } from '@lucide/angular';

export interface Credential {
  category: string;
  /** `null` until the detail has been verified and is safe to publish. */
  detail: string | null;
  icon: LucideIcon;
}
