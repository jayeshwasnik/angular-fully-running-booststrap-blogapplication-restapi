import { Component, OnInit } from '@angular/core';

//importing route related code

import { ActivatedRoute, Router } from '@angular/router';
//for blogservice
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})


export class BlogViewComponent implements OnInit {
  //variable to store the blog being called
  public currentBlog;



  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService) {

    console.log("constructor called")
  }



  ngOnInit() {
    console.log("ngOnInit called")
    //getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //using blogservice to get the current blog
    this.currentBlog = this.blogHttpService.getBlogInformation(myBlogId).subscribe(
      data=>{
        this.currentBlog=data["data"];
      },
      error=>{console.log("error")}
    );

  }

  //* /function to feed blog info from allBlogs to currentBlog


}