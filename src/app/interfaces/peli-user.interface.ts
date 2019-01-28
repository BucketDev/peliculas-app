import { LikedMovie } from './liked-movie.interface';

export interface PeliUser {
  uid: string,
  displayName: string,
  email: string,
  photo: string
  likedMovies?: LikedMovie[]
}
