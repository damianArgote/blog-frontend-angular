import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavUserComponent } from './nav-user/nav-user.component';
import { NavegationComponent } from './navegation/navegation.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { FormPostComponent } from './form-post/form-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    NavUserComponent,
    NavegationComponent,
    FooterComponent,
    SidebarComponent,
    PostComponent,
    PostDetailComponent,
    FormPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
