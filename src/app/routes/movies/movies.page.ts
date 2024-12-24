import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { MoviesBlockComponent } from '../../shared/components/movie-block/movie-block.component';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies.page.html',
  imports: [HeaderComponent, FooterComponent, MoviesBlockComponent, HeroBannerComponent],
})
export class MoviesHomePage implements OnInit {
  constructor() {}
  movies = {
    recommended: { title: 'Recommended Movies', movies: [] },
    popular: { title: 'Popular Movies', movies: [] },
    trending: { title: 'Trending Movies', movies: [] },
    topRated: { title: 'Top Rated Movies', movies: [] },
    thriller: { title: 'Thriller Movies', movies: [] },
    action: { title: 'Action Movies', movies: [] },
    comedy: { title: 'Comedy Movies', movies: [] },
    drama: { title: 'Drama Movies', movies: [] },
    romance: { title: 'Romance Movies', movies: [] },
    horror: { title: 'Horror Movies', movies: [] },
    top10: { title: 'Top 10 Movies', movies: [] },
  };

  ngOnInit(): void {

  }
}
