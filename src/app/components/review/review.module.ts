import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReviewComponent
  ],
  exports: [
    ReviewComponent
  ]
})
export class ReviewModule { }
