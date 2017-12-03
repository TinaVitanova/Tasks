import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { ContactsComponent } from './contacts/contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from 'app/posts.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true, delay: 600 })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
    ContactsComponent,
  ],
  providers: [HeroService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
