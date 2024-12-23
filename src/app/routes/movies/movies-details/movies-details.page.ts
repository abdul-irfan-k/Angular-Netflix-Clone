import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../core/layout/header/header.component';
import { FooterComponent } from '../../../core/layout/footer/footer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PopupVideoPlayerComponent } from '../../../shared/components/popup-video-player/popup-video-player';
import { MovieBannerComponent } from './movie-banner/movie-banner.component';
import { TMDBMovieService } from '../../../shared/services/tmdb.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details.page.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    MoreDetailsComponent,
    MovieBannerComponent,
    PopupVideoPlayerComponent,
    NgIf,
    SimilarMoviesComponent,
    NgFor,
  ],
})
export class MoviesDetailsPage implements OnInit {
  @Input() movieId: string = '';

  showPopupVideo = false;
  movieDetails: any = {};

  constructor(
    private tmdbService: TMDBMovieService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.tmdbService.getMovieDetails(this.movieId).subscribe(
      (data: any) => {
        this.movieDetails.bannerUrl = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
        this.movieDetails.overview = data.overview;
        this.movieDetails.title = data.title;
        this.movieDetails.id = data.id;
        this.movieDetails.genres = data.genres;
        this.movieDetails.tagline = data.tagline;
        this.movieDetails.videos = data.videos;
        this.movieDetails.vote_average = data.vote_average;
        this.movieDetails.youtubeVideoKey = data.videos.results[0].key;
        this.movieDetails.releaseDate = data.release_date;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      },
    );
  }

  handleShowVideoClick(): void {
    this.showPopupVideo = true;
  }

  handleOutsideClick(): void {
    this.showPopupVideo = false;
  }
}
