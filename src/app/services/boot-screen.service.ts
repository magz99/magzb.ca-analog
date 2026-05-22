import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootScreenService {
  private bootScreenShown = false;

  isBootScreenShown(): boolean {
    // Check sessionStorage to persist only within current browser session
    // Handle SSR environments where sessionStorage might not be available
    try {
      const stored = sessionStorage.getItem('bootScreenShown');
      return stored ? JSON.parse(stored) : this.bootScreenShown;
    } catch (e) {
      // If sessionStorage is not available (SSR), use in-memory storage
      return this.bootScreenShown;
    }
  }

  markBootScreenShown(): void {
    // Handle SSR environments where sessionStorage might not be available
    try {
      this.bootScreenShown = true;
      sessionStorage.setItem('bootScreenShown', JSON.stringify(true));
    } catch (e) {
      // If sessionStorage is not available (SSR), just use in-memory storage
      this.bootScreenShown = true;
    }
  }
}