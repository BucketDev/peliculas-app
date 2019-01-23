import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieDatePipe } from '../../pipes/movie-date.pipe';
import { MovieTagsPipe } from '../../pipes/movie-tags.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieComponent,
    MovieDatePipe,
    MovieTagsPipe
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }
