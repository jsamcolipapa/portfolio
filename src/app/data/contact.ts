import { LucideBriefcase, LucideCodeXml, LucideMail } from '@lucide/angular';
import { ContactLink } from '../core/models/contact-link.model';
import { CONTACT_VALUES } from './contact.generated';

// Contact details are not kept in the repository. They are read from environment
// variables by scripts/generate-contact.mjs (see .env.example). Entries left unset
// render as "To be added" instead of a dead link.
const withoutProtocol = (url: string | null) =>
  url?.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '') ?? null;

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    label: 'Email',
    href: null,
    display: null,
    encodedEmail: CONTACT_VALUES.email,
    icon: LucideMail,
  },
  {
    label: 'LinkedIn',
    href: CONTACT_VALUES.linkedin,
    display: CONTACT_VALUES.linkedin && 'Sam Colipapa',
    icon: LucideBriefcase,
  },
  {
    label: 'GitHub / GitLab',
    href: CONTACT_VALUES.github,
    display: withoutProtocol(CONTACT_VALUES.github),
    icon: LucideCodeXml,
  },
];
