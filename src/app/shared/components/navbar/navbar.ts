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
  template: `
    <header
      class="sticky top-0 z-10 h-16 border-b border-[#6496d2]/15 bg-canvas/90 backdrop-blur-lg md:h-[72px]"
    >
      <div class="container-page flex h-full items-center justify-between gap-6">
        <a
          class="flex items-center gap-3 text-sm font-bold tracking-tight md:text-base"
          href="#home"
          [attr.aria-label]="fullName + ' — home'"
        >
          <span
            class="grid size-9 place-items-center rounded-xl bg-linear-135 from-accent-soft to-[#4f46e5] text-sm shadow-lg shadow-[#6d28d9]/20 md:size-10 md:text-base"
            aria-hidden="true"
            >{{ profile.initials }}</span
          >
          <span>{{ fullName }}</span>
        </a>

        <button
          type="button"
          class="flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-white md:hidden"
          aria-controls="nav-links"
          [attr.aria-expanded]="open()"
          (click)="toggle()"
        >
          {{ open() ? 'Close' : 'Menu' }}
          @if (open()) {
            <svg lucideX size="16"></svg>
          } @else {
            <svg lucideMenu size="16"></svg>
          }
        </button>

        <nav
          id="nav-links"
          aria-label="Main navigation"
          class="absolute inset-x-4 top-[63px] flex-col rounded-xl border border-line bg-panel p-3 text-sm text-[#c2d1e7] shadow-2xl shadow-black/50 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
          [class.flex]="open()"
          [class.hidden]="!open()"
        >
          @for (link of links; track link.target) {
            <a
              class="rounded-md px-3 py-2.5 transition-colors hover:text-accent-soft md:px-0 md:py-6"
              [class.text-accent-soft]="active() === link.target"
              [attr.aria-current]="active() === link.target ? 'location' : null"
              [href]="'#' + link.target"
              (click)="select(link.target)"
              >{{ link.label }}</a
            >
          }
        </nav>
      </div>
    </header>
  `,
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
   * section nested in another (credentials inside experience) takes over once it is reached.
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
