import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-about-page',
  template: `
    <h2 class="text-2xl mb-2.5">About Me</h2>

    <p class="mb-1">
      Hi, I'm Magz and I'm a web developer specializing in Typescript and
      Angular. I have worked as a developer for over 13 years and have helped
      build various websites and hybrid mobile applications.
    </p>
    <p class="mb-1">Here is a talk I have given on Ionic and ComponentStore:</p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/fm7rWULEpMM?si=fAyKUvT87peUTf1d"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  `,
})
export default class AboutPageComponent {}
