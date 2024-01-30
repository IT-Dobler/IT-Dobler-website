import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideStore, provideState} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideRouterStore, routerReducer} from "@ngrx/router-store";
import {settingsEffects} from "@frontend/shared-angular";
import {settingsFeature} from "@frontend/shared-angular";
import {provideStoreDevtools} from "@ngrx/store-devtools";

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(settingsEffects),
    provideState(settingsFeature),

    provideRouter(appRoutes),

    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideStoreDevtools(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
        TranslateModule.forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        })
    ),
  ],
};
