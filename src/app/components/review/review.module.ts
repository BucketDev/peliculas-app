import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review.component';
import { ReviewUserComponent } from './review-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ReviewComponent,
    ReviewUserComponent
  ],
  exports: [
    ReviewComponent,
    ReviewUserComponent
  ]
})
export class ReviewModule { }
