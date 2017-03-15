import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { Routing }       from './app.routing';


@NgModule({
  imports:      [ BrowserModule,
                  Routing,
                  HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }