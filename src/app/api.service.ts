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
  
  saveCategories(categories:Category[]){
    this.httpClient.post('http://blog-backend.test/api/categories',categories)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
