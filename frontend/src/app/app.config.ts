import {ApplicationConfig, ENVIRONMENT_INITIALIZER, importProvidersFrom, inject} from '@angular/core';
import {provideRouter, withInMemoryScrolling, withRouterConfig} from '@angular/router';
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
import {provideAnimations, provideNoopAnimations} from "@angular/platform-browser/animations";

// AoT requires an exported function for factories
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const disableAnimations: boolean = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

export const appConfig: ApplicationConfig = {
  providers: [
    !disableAnimations ? provideAnimations() : provideNoopAnimations(),
    provideRouter(appRoutes,
        withRouterConfig({

        }),
        withInMemoryScrolling({
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        })),

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
