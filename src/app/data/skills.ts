import {
  LucideBoxes,
  LucideBraces,
  LucideComponent,
  LucidePlug,
  LucideWorkflow,
  LucideWrench,
} from '@lucide/angular';
import { Skill } from '../core/models/skill.model';

export const SKILLS: readonly Skill[] = [
  {
    name: 'Angular',
    details: ['Standalone components', 'Signals', 'Forms'],
    icon: LucideComponent,
  },
  {
    name: 'TypeScript',
    details: ['Strong typing', 'OOP', 'Clean code'],
    icon: LucideBraces,
  },
  {
    name: 'AWS AppSync',
    details: ['GraphQL', 'Resolvers', 'API orchestration'],
    icon: LucideWorkflow,
  },
  {
    name: 'AWS CDK',
    details: ['Infrastructure as code', 'Cloud stacks'],
    icon: LucideBoxes,
  },
  {
    name: 'REST APIs',
    details: ['Integration', 'Data fetching', 'HTTP'],
    icon: LucidePlug,
  },
  {
    name: 'Tools & Libraries',
    details: ['RxJS', 'Angular Material', 'Git', 'GitLab'],
    icon: LucideWrench,
  },
];
