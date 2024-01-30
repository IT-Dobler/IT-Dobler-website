import {Actions, createEffect, ofType} from "@ngrx/effects";
import {distinctUntilChanged, EMPTY, exhaustMap, of, tap, withLatestFrom} from "rxjs";
import {inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {SettingsApiEvents} from "./settings.events";
import {selectLanguage, selectSettingsState, selectTheme, SettingsState} from "./settings.feature";
import {TranslateService} from "@ngx-translate/core";
import {SettingsService} from "./settings.service";

export const SETTINGS_KEY = 'SETTINGS'

export const initSettings = createEffect(
    (events$ = inject(Actions), settingsService = inject(SettingsService)) => {
      return events$.pipe(
          ofType(SettingsApiEvents.initSettings),
          exhaustMap(() => {
            // Try local storage
            const settingsString = localStorage.getItem(SETTINGS_KEY);

            if (settingsString) {
              const settings = JSON.parse(settingsString) as SettingsState;
              return of(
                  SettingsApiEvents.changeLanguage({language: settings.language}),
                  SettingsApiEvents.changeTheme({theme: settings.theme})
              );
            }

            // Otherwise try figuring it out from browser
            const languageFromBrowser = settingsService.getLanguageFromBrowser();
            const themeFromBrowser = settingsService.getThemeFromBrowser();
            return of(
                SettingsApiEvents.changeLanguage({language: languageFromBrowser ?? 'en'}),
                SettingsApiEvents.changeTheme({theme: themeFromBrowser})
            );
          }),
      )
    },
    {functional: true}
);

export const persistSettings = createEffect(
    (events$ = inject(Actions), store = inject(Store)) => {
      return events$.pipe(
          ofType(SettingsApiEvents.changeLanguage, SettingsApiEvents.changeTheme),
          withLatestFrom(store.select(selectSettingsState)),
          exhaustMap(([_, state]) => {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(state));

            return EMPTY;
          }),
      )
    },
    {functional: true, dispatch: false}
);

export const setTranslationServiceLanguage = createEffect(
    (store = inject(Store), languageService = inject(TranslateService)) => {
      return store.pipe(
          select(selectLanguage),
          distinctUntilChanged(),
          tap((language) => languageService.use(language)),
      );
    },
    {functional: true, dispatch: false}
);

export const updateTheme = createEffect(
    (store = inject(Store)) => {
      return store.pipe(
          select(selectTheme),
          distinctUntilChanged(),
          tap((theme) => {
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          }),
      );
    },
    {functional: true, dispatch: false}
);

export const settingsEffects = {initSettings, persistSettings, setTranslationServiceLanguage, updateTheme};