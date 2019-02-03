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

  getTopVoted = () => {
    return this.afs.collection<Movie>('movies').snapshotChanges()
    .pipe(map((actions: DocumentChangeAction<Movie>[]) => {
      return actions.map((action: DocumentChangeAction<Movie>) => {
        let movie: Movie = action.payload.doc.data();
        movie.id = action.payload.doc.id;
        movie.peliTags = [];
        if(movie.tags) {
          movie.tags.forEach((tagDocument: DocumentReference) => {
            tagDocument.get().then((tag: DocumentSnapshot<Tag>) => {
              movie.peliTags.push(tag.data());
            })
          })
        }
        return movie;
      })
    }));
  }

  getMovie = (id: string) => {
    return this.moviesCollection.doc(id).get();
  }

  getMovies = () => {
    return this.moviesCollection.valueChanges();
  }

  createMovie = (movie: Movie): Promise<DocumentReference> => {
    return this.moviesCollection.add(movie);
  }

}
