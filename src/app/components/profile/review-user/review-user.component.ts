import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../../interfaces/review.interface';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../../providers/review.service';

@Component({
  selector: 'app-review-user',
  templateUrl: './review-user.component.html',
  styles: []
})
export class ReviewUserComponent implements OnInit {

  @Input() reviews: Review[];

  constructor(private activatedRoute: ActivatedRoute,
              private reviewService: ReviewService) {
    this.activatedRoute.parent.params.subscribe(params => {
      this.getReviews(params['uid'])
    });
  }

  ngOnInit() {
  }

  getReviews = (uid: string) => {
    this.reviewService.getReviewsByUser(uid).subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    });
  }

}
