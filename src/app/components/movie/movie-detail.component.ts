import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { ReviewService } from '../../providers/review.service';
import { MovieService } from '../../providers/movie.service';
import { AuthService } from '../../providers/auth.service';
import { Movie } from '../../interfaces/movie.interface';
import { Review } from '../../interfaces/review.interface';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: []
})
export class MovieDetailComponent implements OnInit {

  faPlus = faPlus;

  movie: Movie;
  reviews: Review[];
  addingReview: boolean = false;
  review: Review;

  constructor(private activatedRoute:ActivatedRoute,
              private movieService: MovieService,
              private reviewService: ReviewService,
              private auth: AuthService) {
    this.activatedRoute.params.subscribe(params => {
      this.getMovie(params['id']);
      this.getReviews(params['id'])
    });
  }

  ngOnInit() {
  }

  getMovie = (id: string) => {
    this.movieService.getMovie(id).subscribe((movieDocument: DocumentSnapshot<Movie>) => {
      this.movie = movieDocument.data();
      this.movie.id = id;
    });
  }

  getReviews = (movieId: string) => {
    this.reviewService.getReviewsByMovie(movieId).subscribe((reviews: Review[]) => {
      this.reviews = reviews;
    })
  }

  showReview = () => {
    this.addingReview = true;

    this.review = {
      movieId: this.movie.id,
      movieName: this.movie.name,
      moviePhoto: this.movie.photoUrl,
      uid: this.auth.peliUser.uid,
      photo: this.auth.peliUser.photo,
      displayName: this.auth.peliUser.displayName,
      review: ''
    };
  };

  cancelReview = () => this.addingReview = false;

  saveReview = (review: string) => {
    this.review.review = review;
    this.addingReview = false;
    this.reviewService.createReview(this.review).then();
  }

}
