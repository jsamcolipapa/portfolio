import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { CONTRIBUTIONS } from '../../data/experience';
import { Credentials } from '../credentials/credentials';

@Component({
  selector: 'app-experience',
  imports: [LucideDynamicIcon, Credentials],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section">
      <div class="container-page grid items-start gap-7 lg:grid-cols-[1.7fr_0.9fr]">
        <div>
          <p class="eyebrow">Accomplishments</p>
          <h2 class="mb-5 text-3xl font-bold tracking-tight">Key Contributions</h2>
          <div class="grid gap-3 sm:grid-cols-2">
            @for (item of contributions; track item.title) {
              <article
                class="rounded-xl border border-[#172e49] bg-linear-145 from-[#0a1b30] to-[#06111f] p-4"
              >
                <span class="icon-tile mb-3 size-8 rounded-lg bg-[#282057] text-[#c4b5fd]">
                  <svg [lucideIcon]="item.icon" size="16"></svg>
                </span>
                <h3 class="mb-1 text-sm font-bold">{{ item.title }}</h3>
                <p class="text-xs leading-relaxed text-muted">{{ item.description }}</p>
              </article>
            }
          </div>
        </div>
        <app-credentials />
      </div>
    </section>
  `,
})
export class Experience {
  protected readonly contributions = CONTRIBUTIONS;
}
