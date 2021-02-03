import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from '../Post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post:Post;
  @Input() i:number;


  constructor(private router:Router) { }

  ngOnInit(): void {

    console.log(this.post)
  }

}
