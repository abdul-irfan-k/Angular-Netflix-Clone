import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../../shared/ui/button/action-button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  imports: [ActionButtonComponent, SvgIconComponent],
})
export class HeroBannerComponent {
  content = `Years after retiring from their formidable ninja lives, a dysfunctional
        family must return to shadowy missions to counteract a string of looming
        threats.`;
}
