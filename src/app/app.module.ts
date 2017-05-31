import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DragulaComponent } from './dragula/dragula.component';
import { Map2Component } from './map2/map2.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        DragulaComponent,
        Map2Component
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDMkPRO6HIqp99ob_LW4rJgugizxOeN4NQ'
        }),
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
