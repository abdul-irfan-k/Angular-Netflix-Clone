import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { ClickOutsideDirective } from '../../directives/click-outside-directive';

@Component({
  selector: 'app-popup-video-player',
  templateUrl: './popup-video-player.html',
  imports: [YouTubePlayer, ClickOutsideDirective],
})
export class PopupVideoPlayerComponent implements AfterViewInit {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input() videoId?: string;
  @Output() outsideClick = new EventEmitter<void>();

  @ViewChild('videoContainer') player?: ElementRef<HTMLDivElement>;

  videoWidth?: number;
  videoHeight?: number;

  ngAfterViewInit(): void {
    this.updateVideoDimensions();
  }

  updateVideoDimensions(): void {
    if (this.player) {
      this.videoWidth = this.player.nativeElement.offsetWidth;
      this.videoHeight = this.player.nativeElement.offsetHeight;
      this.changeDetectorRef.detectChanges();
    }
  }

  handleOutsideClick(): void {
    this.outsideClick.emit();
  }
}
