import { Component, OnInit } from '@angular/core';
import {Category} from '../Category.model';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  categories: Category[] = [];
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit():void {
    this.categoriesService.getCategories()
    .subscribe(
      (categories: Category[]) => {
        
        this.categories = categories;
        this.categoriesService.setCategories(categories);
      }
    );
  }


}
