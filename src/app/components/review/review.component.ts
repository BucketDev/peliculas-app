import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styles: []
})
export class ReviewComponent implements OnInit {

  @Input() reviews: Review[];

  constructor() { }

  ngOnInit() {
  }

}
