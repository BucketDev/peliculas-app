import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../providers/movie.service';
import { TagService } from '../../../providers/tag.service';
import { Movie } from '../../../interfaces/movie.interface';
import { Tag } from '../../../interfaces/tag.interface';
import { faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { formatDate } from '@angular/common';

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
              private router: Router,
              public activatedRoute: ActivatedRoute,
              @Inject(LOCALE_ID) private locale: string) {
    this.movie = {
      name: '',
      premiere: null,
      summary: '',
      photoUrl: '',
      youtubeCode: '',
      likes: 0,
      tags: []
    };
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.movie.id = params['id'];
      }
      this.tagService.getTags().subscribe((tags: Tag[]) => {
        this.tags = tags;
        this.movie.id && this.getMovie(this.movie.id);
      });
    });
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
    let datesArray = this.movie.premiere.split('-').map(date => parseInt(date));
    this.movie.premiere = new Date(datesArray[0], datesArray[1] - 1, datesArray[2]);
    if(this.movie.id)
      this.movieService.updateMovie(this.movie).then(() => {
        this.router.navigate(['/admin/movies'])
      });
    else
      this.movieService.createMovie(this.movie).then(() => {
        this.router.navigate(['/admin/movies']);
      });
  }

  getMovie = (id: string) => this.movieService.getMovie(id)
    .subscribe((movieDocument: DocumentSnapshot<Movie>) => {
      let premiere: string = formatDate(movieDocument.data().premiere.toDate(), 'yyyy-MM-dd', this.locale);
      this.movie = movieDocument.data();
      this.movie.premiere = premiere;
      this.movie.id = id;
      this.movie.tags.forEach((tagId: number) => {
        (<HTMLInputElement>document.getElementById('tag-' + tagId)).checked = true;
      })
    });

}
