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
  posts: Posts[]=[];
  contacts: Contact[] = [
    {
      name:"User",
      surname:"1",
      poster:"../../assets/icon1.jpg",
      position:"korisnik"
    },
    {
      name:"User",
      surname:"2",
      poster:"../../assets/icon1.jpg",
      position:"korisnik"
    },
    {
      name:"User",
      surname:"2",
      poster:"../../assets/icon1.jpg",
      position:"korisnik"
    },
  ];

  constructor(private service: PostsService) { }

  Random(){
    this.service.getAll()
    .subscribe(p => this.posts = p);
  }
  ngOnInit() {
  }

}
