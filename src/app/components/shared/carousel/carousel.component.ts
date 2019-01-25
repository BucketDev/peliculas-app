import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/providers/shared/carousel.service';
import { CarouselImage } from '../../../interfaces/carousel-image.interface';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})
export class CarouselComponent implements OnInit {

  imagesCollection: AngularFirestoreCollection<CarouselImage[]>;
  images: CarouselImage[];

  constructor(private carouselService: CarouselService) {
  }

  ngOnInit() {
    this.carouselService.getImages().subscribe((images: CarouselImage[]) => this.images = images);
  }

}
