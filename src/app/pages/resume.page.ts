import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `<h2 class="text-2xl mb-2.5">Resume</h2>

    <p>
      <a
        href="https://raw.githubusercontent.com/magz99/magali-bautista-resume/main/magali-bautista-lee_resume.pdf"
        >Download my resume</a
      >
    </p>`,
})
export default class ResumePageComponent {}
