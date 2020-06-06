import {Component, OnInit} from '@angular/core';
import {throwError} from "rxjs";
import {SubredditService} from "../subreddit.service";
import {SubredditModel} from "../subreddit-model";

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {

  subreddits: Array<SubredditModel>;

  constructor(private subredditService: SubredditService) {
  }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }

}
