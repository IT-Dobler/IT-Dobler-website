import {Route} from "@angular/router";
import {Path} from "@frontend/shared-angular";
import {ContractorComponent} from "./contractor/contractor.component";

export const referencesRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: Path.CONTRACTOR,
        title: 'Contractor',  // TODO Translate
        component: ContractorComponent
      },
      {
        path: '**',
        redirectTo: Path.CONTRACTOR
      }
    ]
  },
];