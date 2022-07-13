import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-selection',
  templateUrl: './carousel-selection.component.html',
  styleUrls: ['./carousel-selection.component.scss'],
})
export class CarouselSelectionComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel;

  constructor() {}

  ngOnInit(): void {
    this.carousel.handleHorizontalSwipe = null;
    this.carousel.handleTouchstart = null;
    this.carousel.handleTouchend = null;
  }
}
