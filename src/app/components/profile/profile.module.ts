import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReviewModule } from '../review/review.module';
import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { LikedMoviesComponent } from './liked-movies/liked-movies.component';
import { ReviewUserComponent } from './review-user/review-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    ReviewModule
  ],
  declarations: [
    ProfileComponent,
    LikedMoviesComponent,
    ReviewUserComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
