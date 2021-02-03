import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../Post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  
  post:Post;

  constructor(
    private postsService:PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    let postId = parseInt(this.activatedRoute.snapshot.params.id);

    this.postsService.getById(postId)
    .subscribe(
      (post:Post) => {
        this.post=post;
      }
    )

  }

}
