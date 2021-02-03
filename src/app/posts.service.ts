import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from './Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:Post[] =[];

  constructor(private apiService:ApiService) { }

  setPosts(data:any){
    this.apiService.setNewPost(data);
  }

  getPosts(){

    return this.apiService.getAllPosts();
  }

  getById(id:number){
    return this.apiService.getPostById(id);
  }

}
