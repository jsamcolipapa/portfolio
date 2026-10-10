import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { SKILLS } from '../../data/skills';
import { SectionHeading } from '../../shared/components/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [LucideDynamicIcon, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = SKILLS;
}
