import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../core/layout/header/header.component';
import { FooterComponent } from '../../../core/layout/footer/footer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PopupVideoPlayerComponent } from '../../../shared/components/popup-video-player/popup-video-player';
import { MovieBannerComponent } from './movie-banner/movie-banner.component';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details.page.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    MoreDetailsComponent,
    MovieBannerComponent,
    PopupVideoPlayerComponent,
  ],
})
export class MoviesDetailsPage implements OnInit {
  @Input() movieId?: string;

  showPopupVideo: boolean = false;

  handleOutsideClick(): void {
    this.showPopupVideo = false;
  }

  handleShowVideoClick(): void {
    this.showPopupVideo = true;
  }

  ngOnInit(): void {
    console.log('Movie ID:', this.movieId);
  }
}
