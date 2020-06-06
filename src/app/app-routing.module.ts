import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreateSubredditComponent} from "./subreddit/create-subreddit/create-subreddit.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {ListSubredditsComponent} from "./subreddit/list-subreddits/list-subreddits.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'create-subreddit', component: CreateSubredditComponent},
  {path: 'list-subreddits', component: ListSubredditsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
