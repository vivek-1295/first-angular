import { Component } from '@angular/core';
import { ComicService } from "./comic.service";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
  providers: [ComicService]
})
export class ComicComponent {
  title = "Comic";
  marvels;
  dcs;
  testcomics;
  constructor(comicService: ComicService) {
    this.marvels = comicService.getMarvelComic();
    this.dcs = comicService.getDCComic();
    this.testcomics = comicService.getTestComic();
   }
}
