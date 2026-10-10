import { TestBed } from '@angular/core/testing';
import { LucideMail } from '@lucide/angular';
import { ContactLink } from '../../core/models/contact-link.model';
import { Contact } from './contact';

describe('Contact', () => {
  const address = 'someone@example.com';
  const links: ContactLink[] = [
    {
      label: 'Email',
      href: null,
      display: null,
      encodedEmail: btoa([...address].reverse().join('')),
      icon: LucideMail,
    },
  ];

  it('keeps the email address out of the page until it is asked for', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const fixture = TestBed.createComponent(Contact);
    (fixture.componentInstance as unknown as { links: ContactLink[] }).links = links;
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.innerHTML).not.toContain(address);
    expect(el.textContent).toContain('Click to show email');

    el.querySelector('button')?.click();
    await fixture.whenStable();

    expect(el.textContent).toContain(address);
    expect(open).toHaveBeenCalledWith(`mailto:${address}`, '_self');
  });
});
