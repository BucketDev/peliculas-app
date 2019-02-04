import { Routes } from '@angular/router';
import { ReviewUserComponent } from '../review/review-user.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';

export const PROFILE_ROUTES: Routes = [
  { path: 'reviews', component: ReviewUserComponent },
  { path: 'favourites', component: LikedMoviesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reviews' }
];
