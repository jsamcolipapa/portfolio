import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideArrowRight, LucideDynamicIcon } from '@lucide/angular';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [LucideDynamicIcon, LucideArrowRight],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full' },
  template: `
    @let item = project();
    <article
      class="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#1b3655] bg-linear-150 from-[#0d2037]/90 to-[#050f1c] transition duration-200 hover:-translate-y-1 hover:border-accent-strong"
    >
      <div
        class="relative mx-3 mt-3 h-36 overflow-hidden rounded-xl border border-[#203b5d] bg-linear-135 from-[#102746] to-[#06101d] p-4"
        aria-hidden="true"
      >
        <div
          class="grid h-full grid-cols-[70px_1fr] gap-2 overflow-hidden rounded-md border border-[#29476b] bg-panel"
        >
          <div class="space-y-2 bg-[#0c1e34] px-2 py-2.5">
            @for (line of sidebarLines; track line) {
              <span class="block h-1 rounded bg-[#355170]"></span>
            }
          </div>
          <div class="px-2 py-2.5">
            <span class="mb-3 block h-2 w-[46%] rounded bg-accent"></span>
            <span class="mb-1.5 block h-4 rounded border border-[#203a5a] bg-[#0e2036]"></span>
            <span
              class="mb-1.5 block h-4 w-[78%] rounded border border-[#203a5a] bg-[#0e2036]"
            ></span>
            <span class="block h-4 w-[90%] rounded border border-[#203a5a] bg-[#0e2036]"></span>
          </div>
        </div>
        <div
          class="absolute top-5 left-5 flex items-center gap-2 rounded-lg border border-[#2b4b70] bg-[#06111f]/90 px-2.5 py-1.5 text-sm font-extrabold text-[#b7d7ff]"
        >
          <svg [lucideIcon]="item.icon" size="15"></svg>
          {{ item.label }}
        </div>
      </div>

      <div class="flex flex-1 flex-col p-4">
        <h3 class="text-[17px] font-bold tracking-tight">{{ item.title }}</h3>
        <p class="mb-2.5 text-xs font-bold text-accent-soft">{{ item.type }}</p>
        <p class="mb-4 text-sm text-muted">{{ item.summary }}</p>
        <ul class="mt-auto mb-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          @for (tag of item.tags; track tag) {
            <li
              class="rounded-md border border-[#203b5b] bg-[#122744] px-2 py-1 text-xs text-[#cbd9ef]"
            >
              {{ tag }}
            </li>
          }
        </ul>
        <a
          class="inline-flex items-center gap-2 self-start text-sm font-bold text-[#a5b4fc] hover:text-white"
          href="#contact"
          [attr.aria-label]="'Discuss ' + item.title"
        >
          Discuss this project
          <svg lucideArrowRight size="15"></svg>
        </a>
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly sidebarLines = [1, 2, 3, 4, 5];
}
