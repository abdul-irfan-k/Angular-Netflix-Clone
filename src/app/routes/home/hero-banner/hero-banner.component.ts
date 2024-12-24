import { Component, Input } from '@angular/core';
import { ActionButtonComponent } from '../../../shared/ui/button/action-button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-starter-hero-banner',
  templateUrl: './hero-banner.component.html',
  imports: [ActionButtonComponent, SvgIconComponent],
})
export class StarterHeroBannerComponent {
  @Input() title: string = 'Ultimated Movies, TV Shows and more';
  @Input() subtitle: string = 'Start at $149. Cancel any time';
  @Input() bannerUrl: string = '/images/banner11.jpg';
}
