import { LucideBoxes, LucideCloud, LucideComponent, LucideWorkflow } from '@lucide/angular';
import { Profile } from '../core/models/profile.model';

export const PROFILE: Profile = {
  givenNames: 'John Samuel',
  familyName: 'Colipapa',
  initials: 'JC',
  role: 'Frontend Developer',
  focus: ['Angular', 'TypeScript', 'AWS AppSync', 'AWS CDK', 'REST APIs'],
  intro:
    'I build scalable, user-friendly web applications that solve real business problems. With a focus on Angular and modern cloud technologies, I turn complex requirements into clean, maintainable, and impactful solutions.',
  tagline: 'Build · Solve · Improve',
  badges: [
    { label: 'Angular', icon: LucideComponent },
    { label: 'AWS Cloud', icon: LucideCloud },
    { label: 'AppSync', icon: LucideWorkflow },
    { label: 'AWS CDK', icon: LucideBoxes },
  ],
};
