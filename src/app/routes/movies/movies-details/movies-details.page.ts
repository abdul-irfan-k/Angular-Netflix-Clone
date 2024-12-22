import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/layout/header/header.component';
import { FooterComponent } from '../../../core/layout/footer/footer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PopupVideoPlayerComponent } from '../../../shared/components/popup-video-player/popup-video-player';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details.page.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    MoreDetailsComponent,
    PopupVideoPlayerComponent,
  ],
})
export class MoviesDetailsPage {
  showPopupVideo: boolean = false;

  handleOutsideClick() {
    this.showPopupVideo = false;
  }

  handleShowVideoClick() {
    this.showPopupVideo = true;
  }
}
