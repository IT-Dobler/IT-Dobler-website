import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Language, settingsFeature, Theme} from "./settings.feature";

export const SettingsApiEvents = createActionGroup({
  source: 'Settings API',
  events: {
    initSettings: emptyProps(),
    changeLanguage: props<{ language: Language }>(),
    changeTheme: props<{ theme: Theme }>(),
  },
});