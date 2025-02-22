import {Route} from "@angular/router";
import {FounderPageComponent} from "./founder/founder-page.component";

export const founderRoutes: Route[] = [
  {
    path: '',
    title: 'founder.browser-title',
    component: FounderPageComponent
  }
];