
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  template: `<div class="border-terminal">
    <h2 class="text-[#c8ffd9] text-2xl mb-4">Resume</h2>

    <ul>
      <li>
        <a
          class="text-[#7cf3a0] hover:text-[#c8ffd9]"
          href="https://raw.githubusercontent.com/magz99/magali-bautista-resume/main/magali-bautista-lee_resume.pdf"
          >Download my resume</a
        >
      </li>
      <li>
        <a
          class="text-[#7cf3a0] hover:text-[#c8ffd9]"
          target="_blank"
          href="https://www.linkedin.com/in/magzbautista/"
          >View my LinkedIn profile</a
        >
      </li>
    </ul>
  </div>`,
})
export default class ResumePageComponent {}
