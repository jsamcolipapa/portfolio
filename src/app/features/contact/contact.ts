import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ContactLink } from '../../core/models/contact-link.model';
import { CONTACT_LINKS } from '../../data/contact';

@Component({
  selector: 'app-contact',
  imports: [LucideDynamicIcon, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly links = CONTACT_LINKS;

  /** The decoded email address, once a visitor has asked for it. */
  protected readonly email = signal<string | null>(null);

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }

  protected displayOf(link: ContactLink): string {
    if (link.encodedEmail) {
      return this.email() ?? 'Click to show email';
    }
    return link.display ?? 'To be added';
  }

  /** Decodes the address only on a click, so scrapers reading the page never see it. */
  protected openEmail(encoded: string): void {
    const email = [...atob(encoded)].reverse().join('');
    this.email.set(email);
    window.open(`mailto:${email}`, '_self');
  }
}
