import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";
import {selectTheme} from "@frontend/shared-angular";
import {SettingsApiEvents} from "@frontend/shared-angular";
import {SunSvgComponent} from "../../sun-svg/sun-svg.component";
import {MoonSvgComponent} from "../../moon-svg/moon-svg.component";

@Component({
  selector: 'itd-theme-select',
  standalone: true,
  imports: [CommonModule, SunSvgComponent, MoonSvgComponent],
  templateUrl: './theme-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectComponent {
  private store = inject(Store);
  themeSig = this.store.selectSignal(selectTheme);

  public toggleTheme() {
    if (this.themeSig() === 'dark') {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'light'}));
    } else {
      this.store.dispatch(SettingsApiEvents.changeTheme({theme: 'dark'}));
    }
  }
}
