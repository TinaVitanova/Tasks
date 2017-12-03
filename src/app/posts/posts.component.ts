import { Component, OnInit } from '@angular/core';

import { Posts } from '../posts';
import { PostsService } from '../posts.service';
@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  body;
  title;
  loading:boolean=false;
  added:boolean=false;
  deleted:boolean=false;
  posts: Posts[]=[];
  post: Posts;
  constructor(private service: PostsService) { }

  Random(){
    this.loading = true;
    setTimeout(()=>{this.loading = false},1000)
    this.service.getAll()
    .subscribe(p => this.posts = p)
  }

  Add(){
    this.post={userId:Math.floor(Math.random()*3-1),      id:Math.floor(Math.random()*100-100),      title:this.title,      body:this.body}
    this.service.save(this.post);
    this.added=true;
    setTimeout(()=>{this.added = false},2000)
  }

  Delete(id){
    this.service.delete(this.post, id);
    this.deleted=true;
    setTimeout(()=>{this.deleted = false},2000)
  }

  ngOnInit() {
  }

}
