import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

  /*
  posts = [
    {title: 'First Post', content: 'This is the 1 post content.'},
    {title: 'Second Post', content: 'This is the 2 post content.'},
    {title: 'Third Post', content: 'This is the 3 post content.'}
  ];
   */
  @Input() posts: Post[] = [];
  private postsSub: Subscription;
  isLoading = false;

  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(id: string){
    this.postsService.deletePost(id);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
