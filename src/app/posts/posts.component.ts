import { Component, OnInit } from '@angular/core';
import {Post} from '../Post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[]= [];

  constructor(private postsService:PostsService) { }
  


  ngOnInit(): void {
  
    this.postsService.getPosts()
    .subscribe(
      (posts:Post[]) => {
        this.posts=posts;
        this.postsService.setPosts(posts);
      }
    )

  }

}
