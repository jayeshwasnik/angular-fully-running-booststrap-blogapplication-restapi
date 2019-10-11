import { Component, OnInit } from '@angular/core';
//import{BlogService} from '../blog.service'
import { BlogHttpService } from '../blog-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare a dummy blog variable having list of blogs

  public allBlogs;
  //initializing service in consttructor never use services inside the cosntructor
  constructor(public blogHttpService: BlogHttpService) {

  }

  ngOnInit() {
    //using blogservice to get all blogs

    //here we are using subscribe to fetch the data from http client in http service
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("error");
        console.log(error.errorMessage);
      }
    );
    console.log(this.allBlogs);
  }

}