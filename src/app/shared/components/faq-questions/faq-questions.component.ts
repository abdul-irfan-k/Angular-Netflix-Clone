import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-faq-questions',
  imports: [SvgIconComponent, NgClass],
  templateUrl: './faq-questions.component.html',
})
export class FaqQuestionsComponent {
  @Input() title?: string;
  @Input() description?: string;
  isHovered: boolean = false;

  handleClick() {
    this.isHovered = !this.isHovered;
  }
}
