import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {Language, selectLanguage} from "@frontend/shared-angular";
import {SettingsApiEvents} from "@frontend/shared-angular";

@Component({
  selector: 'itd-language-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent {
  languageSig = this.store.selectSignal(selectLanguage);

  constructor(private store: Store) {
  }

  public selectLanguage(language: Language) {
    this.store.dispatch(SettingsApiEvents.changeLanguage({language}));
  }

}
