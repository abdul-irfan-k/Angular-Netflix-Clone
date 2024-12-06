import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-hero-content-block',
  imports: [NgClass],
  templateUrl: './hero-content-block.component.html',
})
export class HeroContentBlockComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() imageSrc?: string = '/images/banner1.png';
  @Input() isReverse?: boolean = false;
}
