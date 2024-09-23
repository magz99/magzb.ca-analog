import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer
    class="flex space-x-4 px-4 sm:px-5 lg:px-6 justify-between py-6"
  >
    ©2024 Magz Bautista-Lee
  </footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
