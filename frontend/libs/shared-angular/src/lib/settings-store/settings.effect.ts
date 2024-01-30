import {Actions, createEffect, ofType} from "@ngrx/effects";
import {distinctUntilChanged, EMPTY, exhaustMap, tap, withLatestFrom} from "rxjs";
import {inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {SettingsApiEvents} from "./settings.events";
import {selectLanguage, selectSettingsState, selectTheme} from "./settings.feature";
import {TranslateService, TranslateStore} from "@ngx-translate/core";

export const SETTINGS_KEY = 'SETTINGS'

export const persistSettings = createEffect(
    (events$ = inject(Actions), store = inject(Store)) => {
      return events$.pipe(
          ofType(SettingsApiEvents.changeLanguage, SettingsApiEvents.changeTheme),
          withLatestFrom(store.select(selectSettingsState)),
          exhaustMap(([action, state]) => {
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

export const settingsEffects = {persistSettings, setTranslationServiceLanguage, updateTheme};