import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {SettingsApiEvents} from "@frontend/shared-angular";
import {selectTheme} from "@frontend/shared-angular";
import {LanguageSelectComponent} from "./language-select/language-select.component";

@Component({
  selector: 'itd-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageSelectComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  themeSig = this.store.selectSignal(selectTheme);

  constructor(private store: Store) {
  }

  toggleTheme() {
    if (this.themeSig() === 'dark') {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'light'}));
    } else {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'dark'}));
    }
  }
}
