import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(private afs: AngularFirestore) {
    this.moviesCollection = this.afs.collection('movies');
  }

  getTopVoted = () => {
    return this.moviesCollection.get();
  }

}
