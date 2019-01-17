import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  carouselUrl: string = "https://peliculas-app-83bec.firebaseio.com/carousel.json";

  constructor(private http: HttpClient) { }

  getImages = () => {
    return this.http.get(this.carouselUrl);
  }
}
