import {Route} from "@angular/router";
import {Path} from "@frontend/shared-angular";
import {CareerPageComponent} from "./career-page/career-page.component";
import {HappyPostPageComponent} from "./happy-post-page/happy-post-page.component";
import {SafTimerPageComponent} from "./saf-timer-page/saf-timer-page.component";
import {YpPageComponent} from "./yp-page/yp-page.component";
import {HalmaPageComponent} from "./halma-page/halma-page.component";
import {WebsitesPageComponent} from "./websites-page/websites-page.component";

export const referencesRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: Path.CAREER,
        title: 'references.career.browser-title',
        component: CareerPageComponent
      },
      {
        path: Path.HAPPY_POST,
        title: 'references.happy-post.browser-title',
        component: HappyPostPageComponent
      },
      {
        path: Path.SAF_TIMER,
        title: 'SAF Timer',  // TODO Translate
        component: SafTimerPageComponent
      },
      {
        path: Path.YACHT_PARTNER,
        title: 'references.yp.browser-title',
        component: YpPageComponent
      },
      {
        path: Path.HALMA,
        title: 'references.halma.browser-title',
        component: HalmaPageComponent
      },
      {
        path: Path.WEBSITES,
        title: 'references.websites.browser-title',
        component: WebsitesPageComponent
      },
      {
        path: '**',
        redirectTo: Path.CAREER
      }
    ]
  },
];