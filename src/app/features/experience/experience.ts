import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { CONTRIBUTIONS } from '../../data/experience';
import { Credentials } from '../credentials/credentials';

@Component({
  selector: 'app-experience',
  imports: [LucideDynamicIcon, Credentials],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly contributions = CONTRIBUTIONS;
}
