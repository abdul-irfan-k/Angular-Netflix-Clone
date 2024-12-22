import { Component, Input } from '@angular/core';
import { PopupVideoPlayerComponent } from '../../../../shared/components/popup-video-player/popup-video-player';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  imports: [PopupVideoPlayerComponent],
})
export class MovieBannerComponent {
  @Input() bannerUrl: string = '';

  showPopupVideo: boolean = false;

  handleOutsideClick() {
    this.showPopupVideo = false;
  }

  handleShowVideoClick() {
    this.showPopupVideo = true;
  }
}
