import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-title',
  templateUrl: './text-title.component.html',
  styleUrls: ['./text-title.component.scss'],
})
export class TextTitleComponent implements OnInit {
  @Input("title") title: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }
}
