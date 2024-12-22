import { Routes } from '@angular/router';
import { HomePage } from './routes/home/home.page';
import { LoginPage } from './routes/auth/login/login.page';
import { MoviesDetailsPage } from './routes/movies/movies-details/movies-details.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movie-details/:id',
    component: MoviesDetailsPage,
  },
];
