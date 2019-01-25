import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReviewModule } from '../review/review.module';
import { SharedModule } from '../shared/shared.module';

import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail.component';

import { MovieDatePipe } from '../../pipes/movie-date.pipe';
import { MovieTagsPipe } from '../../pipes/movie-tags.pipe';
import { YoutubeUriPipe } from '../../pipes/youtube-uri.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReviewModule,
    SharedModule
  ],
  declarations: [
    MovieComponent,
    MovieDatePipe,
    MovieTagsPipe,
    YoutubeUriPipe,
    MovieDetailComponent
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }
