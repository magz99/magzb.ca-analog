import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    imports: [RouterLink],
    template: `
    <div class="border-terminal">
      <h1 class="text-[#c8ffd9] text-2xl mb-4">Blog Archive</h1>
      @for (post of posts;track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]" class="text-[#7cf3a0] hover:text-[#c8ffd9]">
        <h2 class="post__title text-[#7cf3a0] font-bold text-xl mb-2">{{ post.attributes.title }}</h2>
        <p class="post__desc text-[#3a8a55] italic mb-4">{{ post.attributes.description }}</p>
      </a>
      }
    </div>
  `,
    styles: [
        `
      a {
        text-align: left;
        display: block;
        margin-bottom: 2rem;
      }

      .post__title,
      .post__desc {
        margin: 0;
      }

      .post__title {
        font-weight: 600;
      }

      .post__desc {
        font-style: italic;
      }
    `,
    ]
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
