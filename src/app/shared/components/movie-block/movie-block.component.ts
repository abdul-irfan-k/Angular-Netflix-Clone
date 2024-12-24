import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  imports: [MovieCardComponent, NgFor],
})
export class MoviesBlockComponent {
  @Input() movies?: any = [];
  @Input() label?: string = '';
}
