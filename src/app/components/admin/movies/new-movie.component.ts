import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../providers/movie.service';
import { TagService } from '../../../providers/tag.service';
import { Movie } from '../../../interfaces/movie.interface';
import { Tag } from '../../../interfaces/tag.interface';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styles: []
})
export class NewMovieComponent implements OnInit {

  faSave = faSave;
  faBan = faBan;

  photo: File;
  movie: Movie;
  tags: Tag[];

  constructor(private movieService: MovieService,
              private tagService: TagService,
              public router: Router) {
    this.tagService.getTags().subscribe((tags: Tag[]) => this.tags = tags);
    this.movie = {
      name: '',
      premiere: null,
      summary: '',
      photoUrl: '',
      youtubeCode: '',
      likes: 0,
      tags: []
    };
  }

  ngOnInit() {
  }

  setPhotoUrl = (photoUrl: string) => {
    this.movie.photoUrl = photoUrl;
  }

  tagSelected = (element: HTMLInputElement) => {
    let value = parseInt(element.value);
    if(element.checked)
      this.movie.tags.push(value);
    else
      this.movie.tags.splice(this.movie.tags.indexOf(value), 1);
  }

  createMovie = () => {
    this.movie.premiere = new Date(this.movie.premiere);
    this.movieService.createMovie(this.movie).then(() => {
      this.router.navigate(['/admin/movies']);
    });
  }

}
