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
    popular: { title: 'Popular Movies', movies: [] },
    topRated: { title: 'Top Rated Movies', movies: [] },
    trending: { title: 'Trending Movies', movies: [] },
    latest: { title: 'Latest Movies', movies: [] },
    upcoming: { title: 'Upcoming Movies', movies: [] },
    thriller: { title: 'Thriller Movies', movies: [] },
    action: { title: 'Action Movies', movies: [] },
    comedy: { title: 'Comedy Movies', movies: [] },
    drama: { title: 'Drama Movies', movies: [] },
    romance: { title: 'Romance Movies', movies: [] },
    horror: { title: 'Horror Movies', movies: [] },
  };

  ngOnInit(): void {
    
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies.popular.movies = data.results;
    });

    this.tmdbService.getTrendingMovies().subscribe((data: any) => {
      this.movies.trending.movies = data.results;
    });

    this.tmdbService
      .getMovies('/movie/latest', { page: 1 })
      .subscribe((data: any) => {
        this.movies.latest.movies = data.results;
      });

    this.tmdbService
      .getMovies('/movie/upcoming', { page: 1 })
      .subscribe((data: any) => {
        this.movies.upcoming.movies = data.results;
      });
    this.tmdbService.getTopRatedMovies().subscribe((data: any) => {
      this.movies.topRated.movies = data.results;
    });

    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 35,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.comedy.movies = data.results;
      });
    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 53,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.thriller.movies = data.results;
      });
    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 28,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.action.movies = data.results;
      });
    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 18,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.drama.movies = data.results;
      });
    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 10749,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.romance.movies = data.results;
      });
    this.tmdbService
      .getMovies('/discover/movie', {
        page: 1,
        with_genres: 27,
        with_original_language: 'hi|kn|ml|ta|te',
        sort_by: 'popularity.desc',
      })
      .subscribe((data: any) => {
        this.movies.horror.movies = data.results;
      });
  }
}
