import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import { Movie } from '../interfaces/movie.interface';
import { map } from 'rxjs/operators';
import { Tag } from '../interfaces/tag.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesCollection: AngularFirestoreCollection<Movie>;

  constructor(private afs: AngularFirestore) {
    this.moviesCollection = this.afs.collection('movies');
  }

  getTopVoted = (tagId: number) => tagId ? this.afs.collection<Movie>('movies',ref =>
      ref.where('tags','array-contains', tagId).orderBy('likes', 'desc')).snapshotChanges()
      .pipe(map((actions: DocumentChangeAction<Movie>[]) => {
        return actions.map((action: DocumentChangeAction<Movie>) => {
          let movie: Movie = action.payload.doc.data();
          movie.id = action.payload.doc.id;
          return movie;
        })
      })) :
    this.afs.collection<Movie>('movies',ref => ref.orderBy('likes', 'desc')).snapshotChanges()
    .pipe(map((actions: DocumentChangeAction<Movie>[]) => {
      return actions.map((action: DocumentChangeAction<Movie>) => {
        let movie: Movie = action.payload.doc.data();
        movie.id = action.payload.doc.id;
        return movie;
      })
    }));

  getMovie = (id: string) => {
    return this.moviesCollection.doc(id).get();
  }

  getMovies = () => {
    return this.moviesCollection.snapshotChanges()
    .pipe(map((actions: DocumentChangeAction<Movie>[]) => {
      return actions.map((action: DocumentChangeAction<Movie>) => {
        let movie: Movie = action.payload.doc.data();
        movie.id = action.payload.doc.id;
        return movie;
      })
    }));
  }

  getComingMovies = () => this.afs.collection('movies', ref =>
      ref.where('premiere', '>', new Date())
    ).snapshotChanges().pipe(map((actions: DocumentChangeAction<Movie>[]) => {
      return actions.map((action: DocumentChangeAction<Movie>) => {
        let movie: Movie = action.payload.doc.data();
        movie.id = action.payload.doc.id;
        return movie;
      })
    }));

  createMovie = (movie: Movie): Promise<DocumentReference> => {
    return this.moviesCollection.add(movie);
  }

  updateLikes = (id: string, upvote: boolean) => {
    this.getMovie(id).subscribe((movie: DocumentSnapshot<Movie>) => {
      let likes = movie.data().likes;
      this.moviesCollection.doc(id).update({
        likes: upvote ? ++likes : --likes
      });
    });
  }

  getCarouselMovies = () => this.afs.collection('movies', ref => ref.orderBy('likes', 'desc').limit(4)).snapshotChanges()
    .pipe(map((actions: DocumentChangeAction<Movie>[]) => {
      return actions.map((action: DocumentChangeAction<Movie>) => {
        let movie: Movie = action.payload.doc.data();
        movie.id = action.payload.doc.id;
        return movie;
      })
    })
  );

}
