import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { NavComponent }  from './components/nav/nav.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
