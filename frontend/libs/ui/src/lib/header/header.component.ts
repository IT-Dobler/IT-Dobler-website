import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Store} from "@ngrx/store";
import {Path, SettingsApiEvents} from "@frontend/shared-angular";
import {selectTheme} from "@frontend/shared-angular";
import {LanguageSelectComponent} from "./language-select/language-select.component";
import {
  LanguageAndThemeAwareImageComponent
} from "../language-and-theme-aware-image/language-and-theme-aware-image.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageSelectComponent, LanguageAndThemeAwareImageComponent, TranslateModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  themeSig = this.store.selectSignal(selectTheme);

  constructor(private store: Store, private viewportScroller: ViewportScroller) {
  }

  public toggleTheme() {
    if (this.themeSig() === 'dark') {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'light'}));
    } else {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'dark'}));
    }
  }

  public scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  protected readonly Path = Path;
}
