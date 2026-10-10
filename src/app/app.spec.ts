import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV_LINKS } from './data/navigation';
import { PROFILE } from './data/profile';
import { PERSONAL_PROJECTS, PROJECTS } from './data/projects';

describe('App', () => {
  it('renders the name in the hero heading', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading?.textContent).toContain(PROFILE.givenNames);
    expect(heading?.textContent).toContain(PROFILE.familyName);
  });

  it('renders a section for every navigation target', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    for (const { target } of NAV_LINKS) {
      expect(el.querySelector(`#${target}`), target).not.toBeNull();
    }
  });

  it('renders one card per case study and personal project', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('app-project-card');
    expect(cards.length).toBe(PROJECTS.length + PERSONAL_PROJECTS.length);
  });
});
