import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideArrowRight, LucideDynamicIcon } from '@lucide/angular';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [LucideDynamicIcon, LucideArrowRight],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly sidebarLines = [1, 2, 3, 4, 5];
}
