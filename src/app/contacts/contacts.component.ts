import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  name;
  surname;
  position;
  newcontact:{name:string,  surname:string,  poster:string,  position:string};
  posts: Posts[]=[];
  loading:boolean=false;
  contacts: Contact[]=[];
  constructor(private service: PostsService) { }

  Random(){
    this.loading = true;
    setTimeout(()=>{this.loading = false},1000)
    this.service.getAll()
    .subscribe(p => this.posts = p)
  }
  AddContact(){
  this.newcontact={name:this.name,  surname:this.surname,  poster:"../../assets/icon1.jpg",  position:this.position};
  this.contacts.push(this.newcontact)
  console.log(this.contacts)
  }

  ngOnInit() {
  }

}
