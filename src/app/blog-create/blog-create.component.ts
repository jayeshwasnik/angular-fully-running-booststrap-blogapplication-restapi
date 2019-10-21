import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  

  constructor(private blogHttpService:BlogHttpService) { }

  //always intitialize the values at the beginning

  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];

  ngOnInit() {
  }
  //this method sends the data to create blog service 
  public sendToCreateBlogService():any{
    //object having the payload for the create blog service
    let blogData = {
    title: this.blogTitle,
    description: this.blogDescription,
    blogBody: this.blogBodyHtml,
    category: this.blogCategory
    }

    //calling the service and alos processing the response
    this.blogHttpService.createBlog(blogData).subscribe(
      data=>{console.log(data);
            alert(data);
            alert("Blog Posted Succesfully");},
      error=>{console.log("error in creating blog");
              console.log(error.message);});
  }

}