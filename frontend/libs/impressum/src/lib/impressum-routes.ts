import {Route} from "@angular/router";
import {ImpressumPageComponent} from "./impressum-page/impressum-page.component";

export const impressumRoutes: Route[] = [
  {
    path: '',
    title: 'impressum.browser-title',
    component: ImpressumPageComponent
  }
];