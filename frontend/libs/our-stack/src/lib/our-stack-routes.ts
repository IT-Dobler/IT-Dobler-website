import {Route} from "@angular/router";
import {OurStackPageComponent} from "./our-stack-page/our-stack-page.component";

export const ourStackRoutes: Route[] = [
  {
    path: '',
    title: 'our-stack.browser-title',
    component: OurStackPageComponent
  }
];