import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//for angular forms
import { FormsModule } from '@angular/forms';

//for routing module
import {RouterModule,Routes} from '@angular/router';

//for toastr
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import statements for services
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
//import the below for http client to work in angular 6
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  //include HttpClientModule below too for http client to work,also included forms module,and BrowserAnimationsModule,ToastrModule.forRoot() for toastr
  imports:      [ BrowserModule,HttpClientModule, FormsModule ,BrowserAnimationsModule,ToastrModule.forRoot() ,
  //for routing actually
  RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'create',component:BlogCreateComponent},
    //remember this blogId is just a random name ,you can name it anything.It is not actually the variable blogId in home component
    {path:'blog/:blogId',component:BlogViewComponent},
    {path:'**',component:NotFoundComponent}
  ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BlogViewComponent, BlogCreateComponent, BlogEditComponent, AboutComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  //always see that the services are includeed in providers array
  providers: [BlogService, BlogHttpService]
})
export class AppModule { }
