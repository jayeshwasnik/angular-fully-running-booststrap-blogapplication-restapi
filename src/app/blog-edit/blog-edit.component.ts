import { Component, OnInit } from '@angular/core';

//belwo we are importing the service
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

//for toastr
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
    public possibleCategories=["Comedy","Drama","Action","Technology"];
  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService,private toastr:ToastrService) { }

  ngOnInit() {
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
  public sendToEditBlogService(){
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{console.log(data.message);
            //alert(data);
            //belwo is toastr method for success
            this.toastr.success('blog posted succesfully','success!');
            //this is for redirecting to the the particular blog after one second;
            setTimeout(()=>{this.router.navigate(['/blog',this.currentBlog.blogId]);},1000)
            },
      error=>{console.log("error in creating blog");
              console.log(error.message);
              this.toastr.error('there was an error','Error');
              });




  }
}