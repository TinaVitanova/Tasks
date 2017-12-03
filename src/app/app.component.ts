import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1 class="lead"><span class="display-4">{{title}}</span></h1>
    <div class="header-bar"></div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand">Menu</span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/contacts" routerLinkActive="active">Contacts</a>
        </li>
      </ul>
    </div>
  </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
