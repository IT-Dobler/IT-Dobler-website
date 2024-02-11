import {effect, inject, Injectable} from "@angular/core";
import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {getRouterSelectors} from "@ngrx/router-store";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {withLatestFrom} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

const {selectTitle} = getRouterSelectors();

const APP_NAME_I18N_KEY = 'app.name';

@Injectable()
export class I18nTitleStrategy extends TitleStrategy {

  private title = inject(Title);
  private translationService = inject(TranslateService);
  private store = inject(Store);

  constructor() {
    super();

    const langChangeWithTitle$ = this.translationService.onTranslationChange.pipe(
        withLatestFrom(this.store.select(selectTitle))
    );

    const langChangeWithTitle = toSignal(langChangeWithTitle$);

    effect(() => {
      const [_, title] = langChangeWithTitle() || [];
      if (title) {
        this.updateTitleInternal(title);
      }
    });

  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const titleKey = this.buildTitle(snapshot) ?? '';
    this.updateTitleInternal(titleKey);
  }

  private updateTitleInternal(titleKey: string) {
    const appName = this.translationService.instant(APP_NAME_I18N_KEY);
    const title = this.translationService.instant(titleKey);
    const newTitle = `${title} - ${appName}`;
    this.title.setTitle(newTitle);
  }

}

export function provideI18nTitleStrategy() {
  return {
    provide: TitleStrategy,
    useClass: I18nTitleStrategy
  };
}