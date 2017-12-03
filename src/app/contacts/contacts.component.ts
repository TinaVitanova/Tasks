import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  name;
  surname;
  position;
  added:boolean=false;
  newcontact:{name:string,  surname:string,  poster:string,  position:string};

  contacts: Contact[]=[];
  constructor() { }

  AddContact(){
  this.newcontact={name:this.name,  surname:this.surname,  poster:"../../assets/icon1.jpg",  position:this.position};
  this.contacts.push(this.newcontact)
  localStorage.setItem("contacts", JSON.stringify(this.contacts))
  this.added=true;
  setTimeout(()=>{this.added = false},2000)
  }

  ngOnInit() {
    this.contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  }

}
