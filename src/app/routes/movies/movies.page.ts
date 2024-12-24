import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { MoviesBlockComponent } from '../../shared/components/movie-block/movie-block.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { TMDBMovieService } from '../../shared/services/tmdb.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies.page.html',
  imports: [
    HeaderComponent,
    FooterComponent,
    MoviesBlockComponent,
    HeroBannerComponent,
  ],
})
export class MoviesHomePage implements OnInit {
  constructor(private tmdbService: TMDBMovieService) {}
  movies = {
    recommended: { title: 'Recommended Movies', movies: [] },
    popular: { title: 'Popular Movies', movies: new Array(8).fill(0) },
    trending: { title: 'Trending Movies', movies: new Array(8).fill(0) },
    topRated: { title: 'Top Rated Movies', movies: new Array(8).fill(0) },
    thriller: { title: 'Thriller Movies', movies: new Array(8).fill(0) },
    action: { title: 'Action Movies', movies: new Array(8).fill(0) },
    comedy: { title: 'Comedy Movies', movies: new Array(8).fill(0) },
    drama: { title: 'Drama Movies', movies: new Array(8).fill(0) },
    romance: { title: 'Romance Movies', movies: new Array(8).fill(0) },
    horror: { title: 'Horror Movies', movies: new Array(8).fill(0) },
    top10: { title: 'Top 10 Movies', movies: new Array(8).fill(0) },
  };

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies.popular.movies = data.results;
    });
  }
}
