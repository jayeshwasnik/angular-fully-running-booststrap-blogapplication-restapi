import { Component, OnInit } from '@angular/core';
//belwo we are importing the service
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  
//we are initializing the blogHttpService in the constructor
  constructor(private blogHttpService:BlogHttpService,private _route: ActivatedRoute, private router: Router) { }

  //always intitialize the values at the beginning
//the tow way binding can be seen here,as we give value to blogTitle it is reflected in the view component ,and if the value is changed there it will be changed here too
  public blogTitle:string="this is a default title";
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
      data=>{console.log(data.message);
            //alert(data);
            alert("Blog Posted Succesfully");
            //this is for redirecting to the the particular blog after one second;
            setTimeout(()=>{this.router.navigate(['/blog',data.data.blogId]);},1000)
            },
      error=>{console.log("error in creating blog");
              console.log(error.message);});
  }

}