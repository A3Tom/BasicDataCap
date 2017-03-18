import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { Routing }       from './app.routing';

import { LandingPageComponent, NavbarComponent, SidebarComponent } from './Shared/index';


@NgModule({
  imports:      [ BrowserModule,
                  Routing,
                  HttpModule ],
  declarations: [ AppComponent,
                  LandingPageComponent,
                  NavbarComponent,
                  SidebarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }