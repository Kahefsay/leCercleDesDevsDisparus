import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Review} from '../model/review';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getLastFiveReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:8080/reviews/lastFive');
  }
}
