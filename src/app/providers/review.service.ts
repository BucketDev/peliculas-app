import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from '../interfaces/review.interface';
import { PeliUser } from '../interfaces/peli-user.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private afs: AngularFirestore) { }

  getReviewsByMovie = (movieId: string): Observable<{}[]> => {
    return this.afs.collection('reviews', ref =>
      ref.where('movieId', '==', movieId)
    ).valueChanges().pipe(map((reviews: Review[]) => {
      return reviews.map((review: Review) => {
        review.user.get().then((user: DocumentSnapshot<PeliUser>) => {
          review.peliUser = user.data();
        })
        return review;
      })
    }));
  }
}
