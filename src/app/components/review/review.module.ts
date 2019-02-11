import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReviewComponent } from './review.component';
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
    NewReviewComponent
  ],
  exports: [
    ReviewComponent,
    NewReviewComponent
  ]
})
export class ReviewModule { }
