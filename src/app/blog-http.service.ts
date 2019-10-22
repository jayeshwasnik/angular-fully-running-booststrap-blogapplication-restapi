import { Injectable } from '@angular/core';
//importing http client to make the request
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken='NzE3YTZlODRmYzI3NzczMDc3MjM2YjJmOTFmZTkzMTM5YTk0ZjQ0NmI5YjUyYTQ3ODhhYzQ3OThhZjI5ODEzMzdiYzVmMDRhMDcyMWQzZjQ5MWIzNmEwOTRmNjQ5ODcyZmUzZmYzOGI1NzY2ZGE1NmRjMTVkYWRlM2NmZWYxZmRkNw==';

  constructor(private _http: HttpClient) { console.log("BlogHttpService constructor called"); }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+ this.authToken);
    console.log(myResponse);
    return myResponse;
  }


  //to handle errors
  public handleError(err: HttpErrorResponse) {
    console.log("handle http error calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //sending data to the create api using post method.Notice the use of ',' to send the payload
  public createBlog(blogData){
    let myResponse = this._http.post(this.baseUrl+'/create?authToken='+ this.authToken,blogData);
    console.log(myResponse);
    return myResponse;
  }

  public editBlog(blogId,blogData){
    let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+ this.authToken,blogData);
    console.log(myResponse);
    return myResponse;
  }

  public deleteBlog(blogId){
    let myResponse1 = this._http.post(this.baseUrl+"/"+blogId+'/delete'+'?authToken='+ this.authToken);
   return myResponse1;

  }

  public getBlogInformation(currentBlogId): any {
    // for (let blog of this.allBlogs) {
    //   if (blog.blogId == currentBlogId) {
    //     this.currentBlog = blog;
    //   }
    // }
    // console.log(this.currentBlog)
    // return this.currentBlog;
   let myResponse1 = this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken='+ this.authToken);
   return myResponse1;
  
  }

}