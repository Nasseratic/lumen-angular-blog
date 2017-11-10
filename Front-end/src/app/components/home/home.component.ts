import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ PostsService ]
})
export class HomeComponent implements OnInit {
  public posts = {};
  constructor( public postsService: PostsService ) { }

  ngOnInit() {
    this.postsService.getHomePosts().then(res => {
      this.posts  = res;
      // posts objects to posts array
      const postsTemp = [];
      // tslint:disable-next-line:forin
      for ( const key in this.posts['posts']) {
        postsTemp.push(this.posts['posts'][key]);
      }
      this.posts['posts'] = postsTemp;
    }).catch( rj => {
      console.log(rj);
    });
  }

}
