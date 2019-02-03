import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieService } from '../../../providers/movie.service';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styles: []
})
export class NewMovieComponent implements OnInit {

  faSave = faSave;
  faBan = faBan;

  photo: File;
  private movie: Movie;

  constructor(private movieService: MovieService,
              public router: Router) {
    this.movie = {
      name: '',
      premiere: null,
      summary: '',
      photoUrl: '',
      youtubeCode: ''
    };
  }

  ngOnInit() {
  }

  setPhotoUrl = (photoUrl: string) => {
    this.movie.photoUrl = photoUrl;
  }

  createMovie = () => {
    this.movie.premiere = new Date(this.movie.premiere);
    this.movieService.createMovie(this.movie).then(() => {
      this.router.navigate(['/admin/movies']);
    });
  }

}
