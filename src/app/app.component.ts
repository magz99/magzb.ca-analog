import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="mat-app-background light-theme">
      <nav class="flex space-x-4">
        <a href="/">Home</a>
        <!-- <a href="/blog">Blog</a> -->
        <a href="/about">About</a>
        <a href="/resume">Resume</a>
      </nav>
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
      <footer>©2024 Magz Bautista-Lee</footer>
    </main>
  `,
  styles: [
    `
      :host .content-wrapper {
        max-width: 1400px;
        padding: 2rem;
        margin: 0 auto;
        min-height: 100vh;
        display: block;
      }

      nav {
        //text-align: left;
        padding: 0 0 2rem 0;
      }
    `,
  ],
})
export class AppComponent {}
