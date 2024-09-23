import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="flex sm:px-5 lg:px-6 justify-between py-6">
      <ul class="flex">
        <li class="flex items-center">
          <a href="/">Home</a>
        </li>
        <!-- <a href="/blog">Blog</a> -->
        <li class="flex items-center">
          <a href="/about">About</a>
        </li>
        <li class="flex items-center">
          <a href="/resume">Resume</a>
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
