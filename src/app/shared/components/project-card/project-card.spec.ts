import { TestBed } from '@angular/core/testing';
import { PERSONAL_PROJECTS, PROJECTS } from '../../../data/projects';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  it('renders the project title, type, summary and tags', async () => {
    const project = PROJECTS[0];
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3')?.textContent).toContain(project.title);
    expect(el.textContent).toContain(project.type);
    expect(el.textContent).toContain(project.summary);
    expect(el.querySelectorAll('li').length).toBe(project.tags.length);
  });

  it('links to the contact section with a descriptive label', async () => {
    const project = PROJECTS[1];
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    await fixture.whenStable();

    const link = (fixture.nativeElement as HTMLElement).querySelector('a');
    expect(link?.getAttribute('href')).toBe('#contact');
    expect(link?.getAttribute('aria-label')).toBe(`Discuss ${project.title}`);
  });

  it('links to the live site in a new tab when the project has one', async () => {
    const project = PERSONAL_PROJECTS[0];
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    await fixture.whenStable();

    const link = (fixture.nativeElement as HTMLElement).querySelector('a');
    expect(link?.getAttribute('href')).toBe(project.url);
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link?.textContent).toContain('View live');
  });
});
