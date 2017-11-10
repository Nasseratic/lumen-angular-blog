import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CreateUpdatePostComponent } from './components/create-update-post/create-update-post.component';
import { SigninComponent } from './components/sign-in';

@NgModule({
    imports: [
        RouterModule.forRoot([
          { path : '', component: HomeComponent },
          { path:  'signin', component: SigninComponent },
          { path:  'posts', component: PostsComponent },
          { path:  'cupost', component: CreateUpdatePostComponent },
          { path:  'cupost/:id', component: CreateUpdatePostComponent },
          { path:  'post/:id', component: PostComponent },
          {path: '**', component: HomeComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
