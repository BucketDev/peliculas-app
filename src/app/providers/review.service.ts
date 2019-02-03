import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private afs: AngularFirestore) { }

  getReviewsByMovie = (movieId: string): Observable<{}[]> => {
    return this.afs.collection('reviews', ref =>
      ref.where('movieId', '==', movieId)
    ).valueChanges();
  }
  getReviewsByUser = (uid: string): Observable<{}[]> => {
    return this.afs.collection('reviews', ref =>
      ref.where('uid', '==', uid)
    ).valueChanges();
  }

  createReview = (review: Review): Promise<DocumentReference> => {
    return this.afs.collection('reviews').add(review);
  }
}
