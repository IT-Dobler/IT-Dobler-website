import { Route } from '@angular/router';
import {HomePageComponent} from "@frontend/home";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];
