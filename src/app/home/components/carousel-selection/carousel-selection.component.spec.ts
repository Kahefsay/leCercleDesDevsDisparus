import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSelectionComponent } from './carousel-selection.component';

describe('CarouselSelectionComponent', () => {
  let component: CarouselSelectionComponent;
  let fixture: ComponentFixture<CarouselSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
