import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieOTM(): Observable<Movie> {
    return this.http.get<Movie>('https://cercledesdevsdisparus.herokuapp.com/movies/current');
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://cercledesdevsdisparus.herokuapp.com/movies/all');
  }
}
