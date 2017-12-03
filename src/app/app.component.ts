import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-text navbar-left">
    <h1 class="lead">{{title}}</h1>
  </span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item ">
          <a class="nav-link" routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/contacts" routerLinkActive="active">Contacts</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="header-bar"></div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
