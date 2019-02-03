import { Routes } from '@angular/router';
import { AdminMoviesComponent } from './movies/admin-movies.component';
import { NewMovieComponent } from './movies/new-movie.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'movies', component: AdminMoviesComponent },
  { path: 'movies/new', component: NewMovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
