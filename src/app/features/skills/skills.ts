import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { SKILLS } from '../../data/skills';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [LucideDynamicIcon, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="section">
      <div class="container-page">
        <app-section-heading
          eyebrow="Technical skills"
          title="Technologies I Work With"
          intro="A practical stack for building maintainable front ends and integrating applications with cloud services and APIs."
        />
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          @for (skill of skills; track skill.name) {
            <li class="rounded-xl border border-[#1b3551] bg-panel px-3 py-5 text-center">
              <span
                class="icon-tile mx-auto mb-3 size-12 rounded-2xl border border-[#354e87] bg-linear-140 from-[#25245d] to-[#143654] text-[#c4b5fd]"
              >
                <svg [lucideIcon]="skill.icon" size="22"></svg>
              </span>
              <h3 class="mb-1.5 text-sm font-bold">{{ skill.name }}</h3>
              <p class="text-xs leading-normal text-muted">{{ skill.details.join(' · ') }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly skills = SKILLS;
}
