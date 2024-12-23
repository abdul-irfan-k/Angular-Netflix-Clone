import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
})
export class SimilarMoviesComponent {
  @Input() movies?: Array<any> = new Array(12).fill(0);
}
