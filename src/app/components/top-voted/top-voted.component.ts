import { Component, OnInit } from '@angular/core';
import { QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { TagService } from '../../providers/tag.service';
import { MovieService } from '../../providers/movie.service';
import { Tag } from 'src/app/interfaces/tag.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
declare var $ :any;

@Component({
  selector: 'app-top-voted',
  templateUrl: './top-voted.component.html',
  styles: []
})
export class TopVotedComponent implements OnInit {

  tags: Tag[];
  movies: Movie[];

  constructor(private tagService: TagService,
              private movieService: MovieService) {
    this.tagService.getTags().subscribe((data: QuerySnapshot<Tag>) => {
      this.tags = [];
      data.forEach((tagDocument: QueryDocumentSnapshot<Tag>) => {
        let tag: Tag = tagDocument.data();
        tag.id = tagDocument.id;
        this.tags.push(tag);
      });
    });
    this.movieService.getTopVoted().subscribe((data: QuerySnapshot<Movie>) => {
      this.movies = [];
      data.forEach((movieDocument: QueryDocumentSnapshot<Movie>) => {
        let movie: Movie = movieDocument.data();
        movie.id = movieDocument.id;
        this.movies.push(movie);
      })
    });
  }

  tagSelected = (event: MouseEvent) => {
    console.log($(event.target).hasClass('active'), $(event.target).attr('id'));
  }

  ngOnInit() {
  }

}
