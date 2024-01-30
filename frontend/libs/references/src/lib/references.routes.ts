import {Route} from "@angular/router";
import {Path} from "@frontend/shared-angular";
import {ContractorPageComponent} from "./contractor-page/contractor-page.component";
import {HappyPostPageComponent} from "./happy-post-page/happy-post-page.component";
import {SafTimerPageComponent} from "./saf-timer-page/saf-timer-page.component";
import {YpPageComponent} from "./yp-page/yp-page.component";
import {HalmaPageComponent} from "./halma-page/halma-page.component";

export const referencesRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: Path.CONTRACTOR,
        title: 'Contractor',  // TODO Translate
        component: ContractorPageComponent
      },
      {
        path: Path.HAPPY_POST,
        title: 'Happy Post',  // TODO Translate
        component: HappyPostPageComponent
      },
      {
        path: Path.SAF_TIMER,
        title: 'SAF Timer',  // TODO Translate
        component: SafTimerPageComponent
      },
      {
        path: Path.YACHT_PARTNER,
        title: 'Yacht Partner',  // TODO Translate
        component: YpPageComponent
      },
      {
        path: Path.HALMA,
        title: 'Halma42',  // TODO Translate
        component: HalmaPageComponent
      },
      {
        path: '**',
        redirectTo: Path.CONTRACTOR
      }
    ]
  },
];