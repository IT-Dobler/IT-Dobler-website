import {inject, Injectable} from "@angular/core";
import {Language, SUPPORTED_LANGUAGES, Theme} from "./settings.feature";
import {TranslateService} from "@ngx-translate/core";

@Injectable({providedIn: 'root'})
export class SettingsService {
  private translateService = inject(TranslateService);

  getLanguageFromBrowser(): Language | undefined {
    const language = this.translateService.getBrowserLang();

    if (language && SUPPORTED_LANGUAGES.includes(language as Language)) {
      return language as Language;
    }

    return undefined;
  }

  getThemeFromBrowser(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}