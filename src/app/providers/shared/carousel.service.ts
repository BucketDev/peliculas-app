import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private afs: AngularFirestore) { }

  getImages = (): Observable<{}[]> => {
    return this.afs.collection("carousel").valueChanges();
  }
}
