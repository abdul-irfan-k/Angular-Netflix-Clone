import { Component, Input } from '@angular/core';
import { NameComponent } from '../movie-card/movie-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  imports: [NameComponent, NgFor],
})
export class MoviesBlockComponent {
  @Input() movies?: any = [];
  @Input() label?: string = '';
}
