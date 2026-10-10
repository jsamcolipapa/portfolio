import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { CREDENTIALS } from '../../data/credentials';

@Component({
  selector: 'app-credentials',
  imports: [LucideDynamicIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './credentials.html',
  styleUrl: './credentials.scss',
})
export class Credentials {
  protected readonly credentials = CREDENTIALS;
}
