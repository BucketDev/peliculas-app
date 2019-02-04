import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LikedMovie } from '../interfaces/liked-movie.interface';
import { PeliUser } from '../interfaces/peli-user.interface';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<PeliUser>;

  constructor(private afs: AngularFirestore,
              private movieService: MovieService) {
    this.userCollection = this.afs.collection('users')
  }

  getUser = (uid: string) => this.userCollection.doc(uid).get();

  getLikedMovies = (uid: string) => this.userCollection.doc(uid).collection('likedMovies').get();

  getLikedMovie = (uid: string, movieId: string) => this.userCollection.doc(uid).collection('likedMovies').doc(movieId).get();

  addLikedMovie = (uid: string, likedMovie: LikedMovie) =>
    this.userCollection.doc(uid).collection('likedMovies').doc(likedMovie.movieId).get().subscribe((data) => {
      if(!data.exists) {
        this.userCollection.doc(uid).collection('likedMovies').doc(likedMovie.movieId).set(likedMovie);
        this.movieService.updateLikes(likedMovie.movieId, true);
      }
    });

  removeLikedMovie = (uid: string, movieId: string) => {
    this.userCollection.doc(uid).collection('likedMovies').doc(movieId).delete();
    this.movieService.updateLikes(movieId, false);
  }

}
