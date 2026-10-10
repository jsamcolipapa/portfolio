import { LucideCloudCog, LucideLayers, LucideListChecks, LucideUsers } from '@lucide/angular';
import { Contribution } from '../core/models/contribution.model';

// Add verified outcomes here (performance improvements, release milestones,
// time saved) only once they are confirmed and approved for public use.
export const CONTRIBUTIONS: readonly Contribution[] = [
  {
    title: 'Maintainable UI Patterns',
    description:
      'Applied component-driven Angular patterns and reusable form logic to support complex business workflows.',
    icon: LucideLayers,
  },
  {
    title: 'Cloud API Integration',
    description:
      'Worked across AppSync and REST integrations to connect front-end features with enterprise services.',
    icon: LucideCloudCog,
  },
  {
    title: 'Complex Form Workflows',
    description:
      'Implemented conditional fields, validation behavior, and dynamic promo configuration experiences.',
    icon: LucideListChecks,
  },
  {
    title: 'Cross-functional Delivery',
    description:
      'Translated detailed requirements and edge cases into focused front-end implementation tasks.',
    icon: LucideUsers,
  },
];
