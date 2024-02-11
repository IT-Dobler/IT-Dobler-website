import {Route} from "@angular/router";
import {TeamPageComponent} from "./team/team-page.component";

export const teamRoutes: Route[] = [
  {
    path: '',
    title: 'team.browser-title',
    component: TeamPageComponent
  }
];