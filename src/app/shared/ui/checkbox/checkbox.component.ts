import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  imports: [NgClass],
})
export class CheckBoxComponent {
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Input() onChange = () => {};
  @Input() className = '';

  get additionalClasses() {
    return {
      'cursor-not-allowed': this.disabled,
      [this.className]: true,
    };
  }
}
