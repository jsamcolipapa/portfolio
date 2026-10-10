import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideDynamicIcon,
  LucideFolderKanban,
  LucideMail,
} from '@lucide/angular';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-home',
  imports: [LucideDynamicIcon, LucideArrowUpRight, LucideFolderKanban, LucideMail],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly profile = PROFILE;

  protected readonly badgePositions = [
    'top-0 left-0 md:left-[4%]',
    'top-3 right-0 md:top-12',
    'bottom-3 left-0 md:bottom-6 md:left-[2%]',
    'bottom-0 right-0 md:bottom-2 md:right-[10%]',
  ];
}
