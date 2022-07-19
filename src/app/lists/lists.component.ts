import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {BookService} from '../services/book.service';
import {Movie} from '../model/movie';
import {Book} from '../model/book';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent implements OnInit {
  type: string;
  movieList: Movie[];
  bookList: Book[];

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService,
              private bookService: BookService) {  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
      this.movieList = [];
      this.bookList = [];

      switch (this.type){
        case 'books':
          console.log('books');
          this.getAllBooks();
          break;
        case 'movies':
          console.log('movies');
          this.getAllMovies();
          break;
      }
    });
  }

  getAllBooks(): void{
    this.bookService.getAllBooks()
      .subscribe(
        data => {
          this.bookList = data;
        }
      );
  }

  getAllMovies(): void{
    this.movieService.getAllMovies()
      .subscribe(
        data => {
          this.movieList = data;
        }
      );
  }

}
