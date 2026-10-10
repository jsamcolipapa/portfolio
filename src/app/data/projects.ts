import { LucideBoxes, LucideMapPin, LucideTag } from '@lucide/angular';
import { Project } from '../core/models/project.model';

// Anonymized summaries of professional work. Keep employer and product names,
// screenshots, data, endpoints, and unapproved metrics out of this file.
export const PROJECTS: readonly Project[] = [
  {
    title: 'Promotion Management Workflows',
    label: 'Promotions',
    type: 'Enterprise Web Application',
    summary:
      'Contributed to configurable promotion workflows with dynamic forms, conditional validation, and branch-related data handling.',
    tags: ['Angular 19', 'TypeScript', 'Angular Material', 'REST APIs', 'AWS AppSync', 'AWS CDK'],
    icon: LucideTag,
  },
  {
    title: 'Branch & Region Management',
    label: 'Branches',
    type: 'Internal Tool / API Integration',
    summary:
      'Worked on branch and region data flows, including search and filtering, and integrating branch details into promo-related experiences.',
    tags: ['Angular', 'TypeScript', 'AWS AppSync', 'REST APIs', 'RxJS'],
    icon: LucideMapPin,
  },
  {
    title: 'Daily Operations & Inventory Workflows',
    label: 'Operations & Inventory',
    type: 'Enterprise Operations',
    summary:
      'Contributed to daily cycle count and inventory-related user flows, with API-backed data, validation, and front-end state management.',
    tags: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'AWS AppSync'],
    icon: LucideBoxes,
  },
];
