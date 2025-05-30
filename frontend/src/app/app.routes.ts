import {Route} from '@angular/router';
import {HomePageComponent} from "@frontend/home";
import {Path} from "@frontend/shared-angular";

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    title: 'app.browser-title',
    pathMatch: 'full'
  },
  {
    path: Path.OUR_STACK,
    loadChildren: () => import('@frontend/our-stack').then(m => m.ourStackRoutes)
  },
  {
    path: Path.FOUNDER,
    loadChildren: () => import('@frontend/founder').then(m => m.founderRoutes)
  },
  {
    path: Path.REFERENCES,
    loadChildren: () => import('@frontend/references').then(m => m.referencesRoutes)
  },
  {
    path: Path.IMPRESSUM,
    loadChildren: () => import('@frontend/impressum').then(m => m.impressumRoutes)
  }
];
