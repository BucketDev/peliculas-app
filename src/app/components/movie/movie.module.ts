import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDatePipe } from '../../pipes/movie-date.pipe';
import { MovieTagsPipe } from '../../pipes/movie-tags.pipe';

@NgModule({
  imports: [
    CommonModule
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
