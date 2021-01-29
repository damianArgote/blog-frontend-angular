import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  constructor(private categoryService: CategoryService) { }

  categories:any;

  ngOnInit() {

    this.categoryService.getCategories().subscribe((data) => {
      
      this.categories = data;

    });
  }

}
