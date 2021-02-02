import {Category} from './Category.model';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
  })

export class CategoriesService{
    
    categories: Category[] = [];

    constructor(private apiService:ApiService){}


    setCategories(categories: Category[]){
        this.categories = categories;
    }
    
    getCategories(){
        return this.apiService.getAllCategories();
    }

    add(category:Category){
        this.categories.push(category);
        this.apiService.saveCategories(this.categories);
    }

    

}