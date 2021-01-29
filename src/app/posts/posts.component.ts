import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts:any;

  ngOnInit(): void {

    this.postService.getPosts().subscribe((data) => {
      
      this.posts = data;

    });
  }

}
