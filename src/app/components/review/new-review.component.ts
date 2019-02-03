import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBan, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styles: []
})
export class NewReviewComponent implements OnInit {

  faBan = faBan;
  faSave = faSave;
  review: string;

  @Output() save = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  cancelReview = () => this.cancel.emit();

  saveReview = () => this.save.emit(this.review);

}
