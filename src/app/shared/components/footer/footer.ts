import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../../data/profile';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="py-6 text-xs text-[#8ea3c0]">
      <div class="container-page flex flex-col justify-between gap-2 sm:flex-row sm:gap-4">
        <span>
          © {{ year }}
          <strong class="text-[#d9e5f6]">{{ profile.givenNames }} {{ profile.familyName }}</strong>
          <span aria-hidden="true"> | </span>{{ profile.role }}
        </span>
        <span>{{ profile.tagline }}</span>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
