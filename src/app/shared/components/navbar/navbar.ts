import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { NAV_LINKS } from '../../../data/navigation';
import { PROFILE } from '../../../data/profile';

/** Distance from the top of the viewport, in px, used to decide which section is current. */
const PROBE_OFFSET = 110;

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu, LucideX],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'close()' },
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly profile = PROFILE;
  protected readonly fullName = `${PROFILE.givenNames} ${PROFILE.familyName}`;
  protected readonly links = NAV_LINKS;

  protected readonly open = signal(false);
  protected readonly active = signal(NAV_LINKS[0].target);

  /** True while the page scrolls to a clicked link, so the highlight stays on that link. */
  private following = false;

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const sections = NAV_LINKS.map(({ target }) => document.getElementById(target)).filter(
        (section) => section !== null,
      );
      const update = () => {
        if (!this.following) {
          this.active.set(this.currentSection(sections));
        }
      };
      const release = () => (this.following = false);
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update, { passive: true });
      // A manual scroll also hands control back, for browsers without `scrollend`.
      const releaseEvents = ['scrollend', 'wheel', 'touchmove'];
      for (const name of releaseEvents) {
        window.addEventListener(name, release, { passive: true });
      }
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
        for (const name of releaseEvents) {
          window.removeEventListener(name, release);
        }
      });
      update();
    });
  }

  /**
   * The section under a probe line just below the sticky header. Later links win, so a
   * section nested in another takes over once it is reached.
   */
  private currentSection(sections: readonly HTMLElement[]): string {
    const last = sections.at(-1);
    const atBottom =
      window.scrollY > 0 &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (last && atBottom) {
      return last.id;
    }
    let current = this.active();
    for (const section of sections) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= PROBE_OFFSET && bottom > PROBE_OFFSET) {
        current = section.id;
      }
    }
    return current;
  }

  protected toggle(): void {
    this.open.update((open) => !open);
  }

  protected select(target: string): void {
    this.active.set(target);
    this.following = true;
    this.close();
  }

  protected close(): void {
    this.open.set(false);
  }
}
