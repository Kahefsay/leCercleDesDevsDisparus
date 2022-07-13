import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Book} from '../model/book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookOTM(): Observable<Book> {
    return this.http.get<Book>('https://cercledesdevsdisparus.herokuapp.com//books/current');
  }
}
