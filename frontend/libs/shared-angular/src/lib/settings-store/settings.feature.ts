import {createFeature, createReducer, on} from "@ngrx/store";
import {SettingsApiEvents} from "./settings.events";

export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br' | 'he' | 'ar';

export type Theme = 'light' | 'dark';

export interface SettingsState {
  language: string;
  theme: string;
}

export const initialSettingsState: SettingsState = {
  language: 'en',
  theme: 'light',
};

export const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
      initialSettingsState,
      on(
          SettingsApiEvents.changeLanguage,
          SettingsApiEvents.changeTheme,
          (state, action): SettingsState => {
            return ({...state, ...action});
          },
      ),
  ),
});

export const {
  selectSettingsState,
  selectLanguage,
  selectTheme
} = settingsFeature;
