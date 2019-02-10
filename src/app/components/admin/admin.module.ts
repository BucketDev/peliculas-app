import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { MovieModule } from '../movie/movie.module';
import { SharedModule } from '../shared/shared.module';

import { AdminMoviesComponent } from './movies/admin-movies.component';
import { NewMovieComponent } from './movies/new-movie.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    MovieModule,
    SharedModule
  ],
  declarations: [
    AdminMoviesComponent,
    NewMovieComponent
  ],
  exports: []
})
export class AdminModule { }
