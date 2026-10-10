import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
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

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
