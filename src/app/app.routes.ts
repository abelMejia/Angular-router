import { CONFIGURATION_ROUTES } from './modules/configuration/configuration.routes';
import { USER_ROUTES } from './modules/user/user.routes';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const APP_ROUTES = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent},
  { 
    path: 'admin',
    children: [...CONFIGURATION_ROUTES, ...USER_ROUTES] 
  },
  { path: '**', component: PageNotFoundComponent }
]
