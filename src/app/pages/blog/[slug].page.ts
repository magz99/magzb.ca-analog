import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
    selector: 'app-blog-post',
    imports: [AsyncPipe, MarkdownComponent],
    template: `
    @if (post$ | async; as post) {
    <article class="prose max-w-none">
      <img class="post__image w-full h-auto mb-8" [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </article>
    }
  `,
    styles: [
        `
      .post__image {
        max-height: 40vh;
      }
    `,
    ]
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
