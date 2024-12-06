import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { HeroContentBlockComponent } from './hero-content-block/hero-content-block.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { FaqQuestionsComponent } from '../../shared/components/faq-questions/faq-questions.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroContentBlockComponent,
    SvgIconComponent,
    FaqQuestionsComponent,
  ],
})
export class HomePage {}
