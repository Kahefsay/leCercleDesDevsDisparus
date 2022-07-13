import { Component, OnInit, ViewChild } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../model/movie';
import {Book} from '../../../model/book';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-carousel-selection',
  templateUrl: './carousel-selection.component.html',
  styleUrls: ['./carousel-selection.component.scss'],
})
export class CarouselSelectionComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel;
  bookOTM: Book;
  movieOTM: Movie;

  constructor(private movieService: MovieService, private bookService: BookService) {}

  ngOnInit(): void {
    // this.carousel.handleHorizontalSwipe = null;
    // this.carousel.handleTouchstart = null;
    // this.carousel.handleTouchend = null;
    this.getMovieOTM();
    this.getBookOTM();
  }

  getMovieOTM(): void {
    this.movieService.getMovieOTM()
      .subscribe(
        data => {
          this.movieOTM = data;
        }
      );
  }

  getBookOTM(): void {
    this.bookService.getBookOTM()
      .subscribe(
        data => {
          this.bookOTM = data;
        }
      );
  }
}
