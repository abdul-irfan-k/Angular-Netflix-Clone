import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-block-landscape',
  templateUrl: './movie-block-landscape.component.html',
  imports: [NgFor, RouterLink],
})
export class MovieBlockLandscapeComponent {
  @Input() movies?: any = [];
  @Input() label?: string = '';
}
