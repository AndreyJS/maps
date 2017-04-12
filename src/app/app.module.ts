import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MenuOnCssComponent } from './menu-on-css/menu-on-css.component';

// modules
import { ExportCoreModule } from './export-core/export-core.module';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    MenuOnCssComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ExportCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
