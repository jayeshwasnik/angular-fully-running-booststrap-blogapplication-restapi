import { Component, OnInit } from '@angular/core';

//importing route related code

import { ActivatedRoute, Router } from '@angular/router';
//for blogservice
import { BlogHttpService } from '../blog-http.service';

//for taostr
import { ToastrService } from 'ngx-toastr';
//importing the location module from angular/common
import {Location} from '@angular/common';

//add it to the providers array when you want to use the location
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})


export class BlogViewComponent implements OnInit {
  //variable to store the blog being called
  public currentBlog;
 


  //initializing location and other varaibles in constructor
  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService,private toastr:ToastrService,public location:Location) {

    console.log("constructor called")
  }



  ngOnInit() {
    console.log("ngOnInit called")
    //getting the blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //using blogHttpservice to get the current blog
    this.currentBlog = this.blogHttpService.getBlogInformation(myBlogId).subscribe(
      data=>{
        this.currentBlog=data["data"];
      },
      error=>{console.log("error")}
    );

  }

  //* /function to feed blog info from allBlogs to currentBlog
public deleteBlog():any{
  this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
    data=>{this.toastr.success("deleted succesfully","Success!");
    //function to redirect to homepage after 1 second
    setTimeout(()=>{this.router.navigate(['/home']);},1000)},
    error=>{this.toastr.error("Error","Error");
    console.log(error);}
  )
}


//function to go back
public goBackFunction(){
this.location.back();
}

}