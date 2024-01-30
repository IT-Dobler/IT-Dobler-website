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
    path: Path.REFERENCES,
    loadChildren: () => import('@frontend/references').then(m => m.referencesRoutes)
  }
];
