import {Book} from './book';
import {Movie} from './movie';

export interface Review {
  _id: string;
  note: string;
  description: string;
  author: number;
  date: boolean;
  type: boolean;
  book: Book;
  movie: Movie;
}
