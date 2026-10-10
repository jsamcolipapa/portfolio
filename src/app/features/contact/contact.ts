import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { CONTACT_LINKS } from '../../data/contact';

@Component({
  selector: 'app-contact',
  imports: [LucideDynamicIcon, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section">
      <div class="container-page grid items-start gap-7 lg:grid-cols-[0.8fr_2fr]">
        <div>
          <p class="eyebrow">Let's connect</p>
          <h2 class="mb-2.5 text-3xl leading-tight font-bold tracking-tight">Get In Touch</h2>
          <p class="text-sm text-muted">
            Open to professional conversations, collaboration, and opportunities to build useful
            software.
          </p>
        </div>
        <ul class="grid gap-3 md:grid-cols-3">
          @for (link of links; track link.label) {
            <li>
              <ng-template #body>
                <span class="icon-tile size-9 rounded-lg bg-[#142947] text-sky">
                  <svg [lucideIcon]="link.icon" size="18"></svg>
                </span>
                <span class="min-w-0">
                  <strong class="block text-sm">{{ link.label }}</strong>
                  <span class="block text-xs break-words text-muted">{{
                    link.display ?? 'To be added'
                  }}</span>
                </span>
              </ng-template>

              @if (link.href; as href) {
                <a
                  class="flex items-center gap-3 rounded-xl border border-[#1b3655] bg-panel p-4 transition-colors hover:border-accent"
                  [href]="href"
                  [attr.target]="isExternal(href) ? '_blank' : null"
                  [attr.rel]="isExternal(href) ? 'noopener noreferrer' : null"
                >
                  <ng-container [ngTemplateOutlet]="body" />
                </a>
              } @else {
                <div
                  class="flex items-center gap-3 rounded-xl border border-[#1b3655] bg-panel p-4"
                >
                  <ng-container [ngTemplateOutlet]="body" />
                </div>
              }
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly links = CONTACT_LINKS;

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }
}
