import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Posts } from 'app/posts';

@Injectable()
export class PostsService {
  UrlPosts='http://jsonplaceholder.typicode.com'
  constructor(private http : Http) { }
  

  getAll(): Observable<Posts[]>{
    let posts = this.http
    .get(this.UrlPosts+'/posts')
    .map(mapPosts);
    return posts;
  }

  save(posts: Posts) : Observable<Response>{
    return this.http
      .put(this.UrlPosts+'/posts', JSON.stringify(posts));
  }
  
  delete(posts: Posts,id) : Observable<Response>{
    return this.http
    .delete(this.UrlPosts+'/posts/'+id, JSON.stringify(posts));
  }
}

function mapPosts(response:Response): Posts[]{
  return response.json().map(toPosts)
}

function toPosts(r:any): Posts{
 let person = <Posts>({
   userId: r.userId,
   id: r.id,
   title: r.title,
   body: r.body,
 });
 return person;
} 
