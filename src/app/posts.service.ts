import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from './Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:Post[] =[];

  constructor(private apiService:ApiService) { }

  setPosts(posts:Post[]){
    this.posts=posts;
  }

  
  getPosts(){

    return this.apiService.getAllPosts();
  }

}
