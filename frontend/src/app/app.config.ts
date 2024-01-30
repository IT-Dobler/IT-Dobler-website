import {ApplicationConfig, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {provideStore, provideState, Store} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideRouterStore, routerReducer} from "@ngrx/router-store";
import {SettingsApiEvents, settingsEffects} from "@frontend/shared-angular";
import {settingsFeature} from "@frontend/shared-angular";
import {provideStoreDevtools} from "@ngrx/store-devtools";

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(appRoutes),

    // State management
    provideStore({
      router: routerReducer,
    }),

    provideState(settingsFeature),
    provideEffects(settingsEffects),

    provideRouterStore(),

    provideStoreDevtools(),


    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
        TranslateModule.forRoot({
          useDefaultLang: false,  // easier to notice missing translations
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        })
    ),
    // init (has to last, order matters)
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        const store = inject(Store);
        store.dispatch(SettingsApiEvents.initSettings());
      }
    }
  ],
};
