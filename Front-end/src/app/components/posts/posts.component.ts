import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit {
  public posts = [];
  constructor( public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().then( res => {
      this.posts = res['data'];
        // posts objects to posts array
        const postsTemp = [];
        // tslint:disable-next-line:forin
        for ( const key in this.posts) {
          postsTemp.push(this.posts[key]);
        }
        this.posts = postsTemp;
    }).catch( rj => { console.log(rj) ; } );
  }

}
