import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  imports: [RouterOutlet, RouterLink],
})
export class MovieCardComponent {
  @Input() imageUrl?: string;
  @Input() title?: string = 'One';
  @Input() label?: string;
  @Input() movieId?: string;

  constructor() {}
}
