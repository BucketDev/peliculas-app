import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ReviewModule } from '../review/review.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    ReviewModule
  ],
  declarations: [
    ProfileComponent,
    LikedMoviesComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
