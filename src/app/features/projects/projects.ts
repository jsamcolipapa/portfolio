import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="section">
      <div class="container-page">
        <app-section-heading
          eyebrow="Selected professional work"
          title="Enterprise Solutions & Technical Contributions"
          intro="An anonymized overview of professional experience. Details are generalized to respect employer confidentiality; these are not presented as personal projects."
        />
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          @for (project of projects; track project.title) {
            <app-project-card class="md:last:col-span-2 lg:last:col-span-1" [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
})
export class Projects {
  protected readonly projects = PROJECTS;
}
