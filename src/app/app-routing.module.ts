import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {FormPostComponent} from './form-post/form-post.component';

const routes: Routes = [
  {path:'', component:PostsComponent},
  {path:'posts/:id', component:PostDetailComponent},
  {path:'new-post',component:FormPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostsComponent,PostDetailComponent,FormPostComponent]
