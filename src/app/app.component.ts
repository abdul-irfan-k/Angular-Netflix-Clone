import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeroContentBlockComponent } from './routes/home/hero-content-block/hero-content-block.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { FaqQuestionsComponent } from './shared/components/faq-questions/faq-questions.component';
// import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroContentBlockComponent,
    SvgIconComponent,
    FaqQuestionsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'netflix-clone';
}
