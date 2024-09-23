import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <main class="mat-app-background light-theme">
      <app-header class="w-full mx-auto max-w-screen-xl" />
      <div class="w-full mx-auto min-h-screen max-w-screen-xl p-10 my-0 ">
        <router-outlet></router-outlet>
      </div>
      <app-footer />
    </main>
  `,
})
export class AppComponent {}
