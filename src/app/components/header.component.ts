import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="flex sm:px-5 lg:px-6 justify-between py-6 border-b border-dashed border-[#3a8a55]">
      <ul class="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <li class="flex items-center">
          <a
            routerLink="/"
            routerLinkActive="router-link-active"
            [routerLinkActiveOptions]="{exact: true}"
            class="text-[#7cf3a0] hover:text-[#c8ffd9]">Home</a>
        </li>
        <li class="flex items-center">
          <a
            routerLink="/blog"
            routerLinkActive="router-link-active"
            class="text-[#7cf3a0] hover:text-[#c8ffd9]">Blog</a>
        </li>
        <li class="flex items-center">
          <a
            routerLink="/about"
            routerLinkActive="router-link-active"
            class="text-[#7cf3a0] hover:text-[#c8ffd9]">About</a>
        </li>
        <li class="flex items-center">
          <a
            routerLink="/resume"
            routerLinkActive="router-link-active"
            class="text-[#7cf3a0] hover:text-[#c8ffd9]">Resume</a>
        </li>
      </ul>

      <!-- <ul class="flex">
        <li><button>Contrast</button></li>
        <li><button>Theme</button></li>
      </ul> -->
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
