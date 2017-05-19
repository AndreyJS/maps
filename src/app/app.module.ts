import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DragulaComponent } from './dragula/dragula.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DragulaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragulaModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
