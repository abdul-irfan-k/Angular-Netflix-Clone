import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  imports: [NgClass],
})
export class NameComponent {
  @Input() type?: 'Default' | 'Primary' | 'Secondary' = 'Default';
  @Input() disabled = false;
  @Input() text = 'Default';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() loading = false;
  @Input() size: 'small' | 'large' | 'medium' = 'medium';
  @Input() isOutlined = false;

  @Input() onClick = () => {};
  @Input() className = '';

  get additionalClasses() {
    return {
      'w-fit': this.size === 'small' || this.size === 'medium',
      'w-full': this.size === 'large',
      'border-2': this.isOutlined,
      [this.className]: true,
      'px-6 py-3 text-base leading-[24px]': this.size === 'large',
      'px-5 py-2 text-base leading-[24px]': this.size === 'medium',
      'px-4 py-1 text-sm': this.size === 'small',
      'bg-transparent-white-20': this.type === 'Default',
    };
  }
}
