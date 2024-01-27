import { Route } from '@angular/router';
import {NxWelcomeComponent} from "./nx-welcome.component";
import {HomeComponent} from "./home/home.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    loadComponent: () => import('@frontend/ui').then((m) => m.UiComponent)
  }
];
