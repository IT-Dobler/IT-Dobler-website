import {Route} from '@angular/router';
import {HomePageComponent} from "@frontend/home";
import {Path} from "@frontend/shared-angular";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: Path.OUR_STACK,
    loadChildren: () => import('@frontend/our-stack').then(m => m.ourStackRoutes)
  },
  {
    path: Path.TEAM,
    loadChildren: () => import('@frontend/team').then(m => m.teamRoutes)
  },
  {
    path: Path.REFERENCES,
    loadChildren: () => import('@frontend/references').then(m => m.referencesRoutes)
  }
];
