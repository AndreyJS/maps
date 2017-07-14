import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent
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
