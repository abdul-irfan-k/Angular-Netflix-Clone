import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  imports: [NgFor],
})
export class MoreDetailsComponent implements OnInit {
  @Input() genres: any = [];

  ngOnInit(): void {
    console.log('Genres:', this.genres);
  }
}
