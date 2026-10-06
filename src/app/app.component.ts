import { Component, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { BootScreenComponent } from './components/boot-screen.component';
import { BootScreenService } from './services/boot-screen.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BootScreenComponent],
  template: `
    @if (showBootScreen) {
      <app-boot-screen></app-boot-screen>
    }
    <main class="mat-app-background light-theme min-h-screen">
      <app-header class="w-full mx-auto max-w-screen-xl" />
      <div class="w-full mx-auto min-h-screen max-w-screen-xl p-4 my-0">
        <router-outlet></router-outlet>
      </div>
      <app-footer />
    </main>
  `,
})
export class AppComponent implements OnDestroy {
  showBootScreen = true;
  private bootTimeout: any;

  constructor(
    private bootScreenService: BootScreenService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Check if boot screen has already been shown
    if (this.bootScreenService.isBootScreenShown()) {
      this.showBootScreen = false;
      return;
    }

    // Only schedule the hide timer in the browser. On the server/during
    // prerendering, the timer would otherwise fire before the page is
    // serialized, baking the "already hidden" state into the static HTML
    // instead of the boot screen that should show first.
    if (isPlatformBrowser(this.platformId)) {
      this.bootTimeout = setTimeout(() => {
        this.showBootScreen = false;
        this.bootScreenService.markBootScreenShown();
      }, 4000);
    }
  }

  ngOnDestroy(): void {
    if (this.bootTimeout) {
      clearTimeout(this.bootTimeout);
    }
  }
}
