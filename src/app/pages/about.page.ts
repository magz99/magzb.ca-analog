import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-page',
  template: `
    <div class="border-terminal">
      <h2 class="text-[#c8ffd9] text-2xl mb-4">About Me</h2>

      <p class="text-[#7cf3a0] mb-2">
        Hi, I'm Magz and I'm a web developer specializing in Typescript and
        Angular. I have worked as a developer for over 13 years and have helped
        build various websites and hybrid mobile applications.
      </p>
      <p class="text-[#7cf3a0] mb-4">Here is a talk I have given on Ionic and ComponentStore:</p>
      <div class="border border-dashed border-[#3a8a55] p-2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fm7rWULEpMM?si=fAyKUvT87peUTf1d"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="w-full"
        ></iframe>
      </div>
    </div>
  `,
})
export default class AboutPageComponent {}
