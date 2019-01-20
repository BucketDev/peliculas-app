import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CarouselImage } from 'src/app/interfaces/carousel-image.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private afs: AngularFirestore) { }

  getImages = (): AngularFirestoreCollection<CarouselImage> => {
    return this.afs.collection("carousel");
  }
}
