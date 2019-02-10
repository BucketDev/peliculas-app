import { LikedMovie } from './liked-movie.interface';

export interface PeliUser {
  uid: string,
  displayName: string,
  email: string,
  password?: string,
  photo?: string
  likedMovies?: LikedMovie[],
  admin: boolean
}
