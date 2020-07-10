import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../shared/post-model";
import {CommentService} from "../../comment/comment.service";
import {PostService} from "../../shared/post.service";
import {ActivatedRoute} from "@angular/router";
import {CommentPayload} from "../../comment/comment-payload";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  name: string;
  posts: PostModel[];
  comments: CommentPayload[];
  postLength: number;
  commentLength: number;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
              private commentService: CommentService) {
    this.name = this.activatedRoute.snapshot.params.name;

    this.postService.getAllPostsByUser(this.name).subscribe(data => {
      this.posts = data;
      this.postLength = data.length;
    });
    this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
      this.comments = data;
      this.commentLength = data.length;
      console.log(this.commentLength = data.length)
    });
  }

  ngOnInit(): void {
  }
}
