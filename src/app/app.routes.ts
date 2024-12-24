import { Routes } from '@angular/router';
import { HomePage } from './routes/home/home.page';
import { LoginPage } from './routes/auth/login/login.page';
import { MoviesDetailsPage } from './routes/movies/movies-details/movies-details.page';
import { MoviesHomePage } from './routes/movies/movies.page';

export const routes: Routes = [
  { path: 'starter', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'movie-details/:movieId', component: MoviesDetailsPage },
  { path: '', component: MoviesHomePage },
];
