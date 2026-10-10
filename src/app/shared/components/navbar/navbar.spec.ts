import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NAV_LINKS } from '../../../data/navigation';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let fixture: ComponentFixture<Navbar>;
  let el: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Navbar);
    el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('renders a link for every section', () => {
    const hrefs = [...el.querySelectorAll('nav a')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(NAV_LINKS.map((link) => `#${link.target}`));
  });

  it('toggles the mobile menu and reflects it in aria-expanded', async () => {
    const button = el.querySelector('button')!;
    const nav = el.querySelector('nav')!;
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(nav.classList.contains('hidden')).toBe(true);

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(nav.classList.contains('hidden')).toBe(false);

    button.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the menu when a link is chosen', async () => {
    const button = el.querySelector('button')!;
    button.click();
    await fixture.whenStable();

    const link = el.querySelector<HTMLAnchorElement>('nav a')!;
    link.addEventListener('click', (event) => event.preventDefault());
    link.click();
    await fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
