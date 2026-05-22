import { Component } from '@angular/core';

@Component({
  selector: 'app-boot-screen',
  standalone: true,
  template: `
    <div class="boot-screen fixed inset-0 bg-[#03110a] flex items-center justify-center z-50">
      <div class="boot-content w-full p-8 text-center">
        <pre class="text-[#7cf3a0] text-lg font-none mb-6">{{ asciiArt }}</pre>
        <div class="text-[#7cf3a0] font-mono text-sm mb-4">
          MBL TERM v1.2.3
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          INITIALIZING... .......... OK
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          MEMORY CHECK ..... 65535 bytes .......... OK
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          TAPE DRIVE ..... NOT PRESENT .......... SKIP
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          NETWORK INTERFACE eth0 ........... UP
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          MOUNTING /dev/sda1 ................ OK
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-2">
          LOADING USER PROFILE [you@home] .... OK
        </div>
        <div class="text-[#7cf3a0] font-mono text-sm mb-4">
          WELCOME, OPERATOR.
        </div>
        <div class="text-[#3a8a55] text-sm font-mono">
          Loading complete - redirecting...
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .boot-screen {
        animation: fadeIn 1s ease-in;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `
  ]
})
export class BootScreenComponent {
  asciiArt = `
 ██████   ██████ ███████████  █████          ███████████ ██████████ ███████████   ██████   ██████
░░██████ ██████ ░░███░░░░░███░░███          ░█░░░███░░░█░░███░░░░░█░░███░░░░░███ ░░██████ ██████ 
 ░███░█████░███  ░███    ░███ ░███          ░   ░███  ░  ░███  █ ░  ░███    ░███  ░███░█████░███ 
 ░███░░███ ░███  ░██████████  ░███              ░███     ░██████    ░██████████   ░███░░███ ░███ 
 ░███ ░░░  ░███  ░███░░░░░███ ░███              ░███     ░███░░█    ░███░░░░░███  ░███ ░░░  ░███ 
 ░███      ░███  ░███    ░███ ░███      █       ░███     ░███ ░   █ ░███    ░███  ░███      ░███ 
 █████     █████ ███████████  ███████████       █████    ██████████ █████   █████ █████     █████
░░░░░     ░░░░░ ░░░░░░░░░░░  ░░░░░░░░░░░       ░░░░░    ░░░░░░░░░░ ░░░░░   ░░░░░ ░░░░░     ░░░░░ `;
}