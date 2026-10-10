import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERSONAL_PROJECTS, PROJECTS } from '../../data/projects';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly personalProjects = PERSONAL_PROJECTS;
}
