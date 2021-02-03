import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { Category } from '../Category.model';
import { Post } from '../Post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  categories:Category[] = [];

  postForm: FormGroup
  

  constructor(
    private categoriesService:CategoriesService,
    private postsService:PostsService,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {

    this.postForm = this.formBuilder.group({
      name:['',Validators.required],
      image:['',Validators.required],
      content:['',Validators.required],
      categoryId:['',Validators.required]
    })
  
    this.categoriesService.getCategories()
    .subscribe(
      (categories:Category[]) => {
        this.categories = categories;
        this.categoriesService.setCategories(categories);
      }
    )

  }

  send(values:any){
    let {categoryId,name,image,content} = values;
    
    let post = {
      categoryId:parseInt( categoryId ),
      name,
      image,
      content
    }

    this.postsService.setPosts(post)
    
  }

}
