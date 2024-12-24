import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class NameComponent {
  @Input() imageUrl?: string;
  @Input() title?:string
  @Input() label?:string
  @Input() movieId?:string

  constructor() {}
}
