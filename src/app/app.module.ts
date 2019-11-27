import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { ComicService } from "./comic/comic.service";

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent, ComicComponent]
})
export class AppModule { }
