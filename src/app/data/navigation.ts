export interface NavLink {
  label: string;
  /** Id of the section the link scrolls to. */
  target: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', target: 'home' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Credentials', target: 'credentials' },
  { label: 'Contact', target: 'contact' },
];
