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

  constructor(public blogHttpService: BlogHttpService) {

  }

  ngOnInit() {
    //using blogservice to get all blogs


    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        //console.log("error");
        //console.log(error.errorMessage);
      }
    );
    console.log(this.allBlogs);
  }

}