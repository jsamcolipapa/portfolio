import { LucideBriefcase, LucideCodeXml, LucideMail } from '@lucide/angular';
import { ContactLink } from '../core/models/contact-link.model';

// TODO before publishing: fill in `href` and `display` with real, verified
// values, e.g. { href: 'mailto:name@example.com', display: 'name@example.com' }.
// Entries left as `null` render as "To be added" instead of a dead link.
export const CONTACT_LINKS: readonly ContactLink[] = [
  { label: 'Email', href: null, display: null, icon: LucideMail },
  { label: 'LinkedIn', href: null, display: null, icon: LucideBriefcase },
  { label: 'GitHub / GitLab', href: null, display: null, icon: LucideCodeXml },
];
