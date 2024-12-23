import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
})
export class MovieBannerComponent {
  @Input() bannerUrl: string = '';
  @Output() showPopupVideo = new EventEmitter<void>();

  handleShowVideoClick(): void {
    this.showPopupVideo.emit();
  }
}
