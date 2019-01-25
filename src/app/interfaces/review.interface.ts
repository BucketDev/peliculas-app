import { PeliUser } from './peli-user.interface';
import { DocumentReference } from '@angular/fire/firestore';

export interface Review {
  movieId: string,
  review: string,
  user: DocumentReference,
  peliUser?: PeliUser
}
