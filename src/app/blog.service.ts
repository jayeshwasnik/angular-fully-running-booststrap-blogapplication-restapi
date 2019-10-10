import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public currentBlog1;

   public allBlogs=[
{"blogId":"1",
"created":"2019 october",
"tags":["serious","Indian Society","Civics"],
"author":"Admin",
"imageURL":"https://wallpaperplay.com/walls/full/5/1/7/284289.jpg",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":`Reasons of Social Problems:

But the very same complexity brings with itself complex nature of social problems and issues. In fact every society of the world has their social issues unique to their society. So does Indian society. Indian society is very rooted in religious beliefs; there are people of different religious beliefs such as Hindus, Muslims, Jains, Sikhs, Parsis etc. These all adds to the socio-cultural varieties of the country. India’s social problems are also rooted in the religious practices and beliefs of it people. Almost all forms of social issues and problems find their origin in the religious and cultural practices of the people of India. These social problems are developed in a long period of times and are still continuing in one form or other.

Furthermore, India has witnessed several wars of large proportions; several foreign invaders attacked India in its long history among whom few made this country as their own and tried to force their socio-religious practices which also deteriorated social conditions; the long period of British rule crippled the country and had thrown it into backwardness. Thus, many such reasons may be cited for India’s social problems but the fact remains that we have these issues and only we can solve them.

FORMS OF SOCIAL ISSUES IN INDIA
Poverty

Poverty is a condition in which a household is not able to fulfill its basic needs for survival i.e. food, clothing and shelter. Poverty is a widespread condition in India. Since Independence, poverty is a prevalent concern. It is the twenty-first century and poverty still is a persistent menace in the country. India happens to be country wherein the disparities between the haves and the have-notes are extremely wide. It needs to be taken into account that although the economy has shown some visible signs of progress in the last two decades, this progress been uneven across various sectors or areas. The growth rates are higher in Gujarat and Delhi as compared to Bihar and Uttar Pradesh. Nearly half of the population doesn’t have proper shelter, access to a decent sanitation system, villages do not have a nearby water source, and villages also do not have a secondary school and lack of proper roads. Some sections of the society like the Dalits are not even included in the poverty list maintained by the concerned authorities assigned by the government. They’re groups that are marginalized in the society.

The element which further complicates and deteriorates the situation is the government subsidies system which has leakages in the distribution system. They never reach the households.

`,
"description":"This is the blog 1 description",
"title":"This is blog 1"
},
{"blogId":"2",
"created":"2019 october",
"tags":["humour","laughter"],
"imageURL":"https://wallpaperplay.com/walls/full/d/b/a/284292.jpg",
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"<h1>HEADING</h1><p>this is the body</p>",
"description":"This is the blog 2 description",
"title":"This is blog 2"
},
{"blogId":"3",
"created":"2019 october",
"tags":["humour","laughter"],
"imageURL":"https://wallpaperplay.com/walls/full/4/b/2/284299.jpg",
"author":"Admin",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 3 description",
"title":"This is blog 3"
},
{"blogId":"4",
"created":"2019 october",
"tags":[],
"author":"Admin",
"imageURL":"https://wallpaperplay.com/walls/full/5/1/7/284289.jpg",
"category":"comedy",
"isPublished":true,
"views":0,
"bodyHtml":"this is the body",
"description":"This is the blog 4 description",
"title":"This is blog 4"
}

  ];





  constructor() { }

  public getAllBlogs():any{
return this.allBlogs;
}

public getBlogInformation(currentBlogId):any{
  for (let blog of this.allBlogs){
    if(blog.blogId==currentBlogId){
      this.currentBlog1=blog;

    }

  }
console.log(this.currentBlog1)
return this.currentBlog1;
}

}

