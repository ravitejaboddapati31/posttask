import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from './post.service';
import { Tpost } from './post.type';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postItems: Tpost[];
  @Input() public post: Tpost;
  @Output() public postDelete: EventEmitter<number> = new EventEmitter();
  
   posts: Tpost;
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    // console.log(this.data);
    // this.posts = this.data;
  }

  // deletePost() {
  //   console.log(this.posts);
  //   this.postDelete.emit(this.posts.id);
  // }
  handelDelete() {
    console.log(this.post);
    this.postDelete.emit(this.post.id);
  }
//    getlikeitems(){
//  this.postItems=this.postService.getitems();

   }

