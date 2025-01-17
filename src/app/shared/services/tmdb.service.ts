import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class TMDBMovieService {
  constructor(private httpService: HttpService) {}

  private readonly apiKey = '';

  // Fetch popular movies
  getPopularMovies(page: number = 1) {
    return this.httpService.get('/movie/popular', {
      page,
    });
  }

  // Fetch top-rated movies
  getTopRatedMovies(page: number = 1) {
    return this.httpService.get('/movie/top_rated', {
      page,
    });
  }

  getTrendingMovies(page: number = 1) {
    return this.httpService.get('/trending/movie/week', { page });
  }

  // Fetch movie details
  getMovieDetails(movieId: string) {
    return this.httpService.get(`/movie/${movieId}`, {
      append_to_response: 'credits,similar,trending,videos',
    });
  }

  getMovies(route: string, params: Record<string, any>) {
    return this.httpService.get(route, params);
  }
  // Search movies
  searchMovies(query: string, page: number = 1) {
    return this.httpService.get('/search/movie', {
      api_key: this.apiKey,
      query,
      page,
    });
  }
}
