import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{

  /*
  posts = [
    {title: 'First Post', content: 'This is the 1 post content.'},
    {title: 'Second Post', content: 'This is the 2 post content.'},
    {title: 'Third Post', content: 'This is the 3 post content.'}
  ];
   */
  @Input() posts: Post[] = [];
}
