import { Route } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { MainPageComponent } from './modules/main_page/main_page.component';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'mainpage', component: MainPageComponent}
];
