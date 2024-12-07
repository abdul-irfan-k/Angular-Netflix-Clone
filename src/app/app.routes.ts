import { Routes } from '@angular/router';
import { HomePage } from './routes/home/home-page';
import { LoginPage } from './routes/auth/login/login.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'login',
    component: LoginPage,
  },
];
