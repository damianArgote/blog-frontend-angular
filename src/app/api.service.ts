import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category.model';
import { Post } from './Post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }


  getAllCategories(){
    return this.httpClient.get<Category[]>('http://blog-backend.test/api/categories');
  }

  getAllPosts(){
    return  this.httpClient.get<Post[]>('http://blog-backend.test/api/posts');
  }

  getPostById(id:number){
    return this.httpClient.get<Post>(`http://blog-backend.test/api/posts/${id}`);
  }

  setNewPost(data:any){
    this.httpClient.post('http://blog-backend.test/api/posts',data)
    .subscribe(
      response => (
        console.log(response)
      ),
      error => console.log(error)
    )
  }
  

}
