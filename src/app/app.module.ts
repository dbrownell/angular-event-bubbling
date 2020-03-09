import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EventBubblingComponent } from './event-bubbling/event-bubbling.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EventBubblingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
