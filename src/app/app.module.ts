import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { ComicService } from "./comic/comic.service";
import { ProductComponent } from './product/product.component';
import { productlist } from "./product/product";

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent, ComicComponent, ProductComponent]
})
export class AppModule { }
