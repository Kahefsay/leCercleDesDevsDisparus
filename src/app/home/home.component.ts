import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../services/review.service';
import {Review} from '../model/review';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getLastFiveReviews();
  }

  getLastFiveReviews(): void {
    this.reviewService.getLastFiveReviews()
      .subscribe(
        data => {
          this.reviews = data;
        });
  }

}
