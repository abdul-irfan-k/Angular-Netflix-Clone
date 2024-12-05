import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroContentBlockComponent } from './hero-content-block/hero-content-block.component';
import { SvgIconComponent } from 'angular-svg-icon';
// import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroContentBlockComponent,
    SvgIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'netflix-clone';
}
