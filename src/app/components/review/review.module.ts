import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReviewComponent } from './review.component';
import { ReviewUserComponent } from './review-user.component';
import { NewReviewComponent } from './new-review.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
    ReviewComponent,
    ReviewUserComponent,
    NewReviewComponent
  ],
  exports: [
    ReviewComponent,
    ReviewUserComponent,
    NewReviewComponent
  ]
})
export class ReviewModule { }
