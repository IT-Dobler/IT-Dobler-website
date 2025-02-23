import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {Path} from "@frontend/shared-angular";
import {LanguageSelectComponent} from "./language-select/language-select.component";
import {
  LanguageAndThemeAwareImageComponent
} from "../language-and-theme-aware-image/language-and-theme-aware-image.component";
import {TranslateModule} from "@ngx-translate/core";
import {ThemeSelectComponent} from "./theme-select/theme-select.component";
import {LinkedinSvgComponent} from "../linkedin-svg/linkedin-svg.component";
import {SubMenuDropdownComponent} from "./sub-menu-dropdown/sub-menu-dropdown.component";
import {SubMenuToggleIndicatorComponent} from "./sub-menu-toggle-indicator/sub-menu-toggle-indicator.component";

@Component({
  selector: 'itd-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageSelectComponent, LanguageAndThemeAwareImageComponent, TranslateModule, ThemeSelectComponent, LinkedinSvgComponent, SubMenuDropdownComponent, SubMenuToggleIndicatorComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public showMenu = false;
  public showReferences = false;
  public showServices = false;
  public showAboutUs = false;
  protected readonly Path = Path;

  public toggleNavBar() {
    this.showMenu = !this.showMenu;
  }

  public toggleReferences() {
    this.showReferences = !this.showReferences;
  }

  public toggleServices() {
    this.showServices = !this.showServices;
  }

  public toggleAboutUs() {
    this.showAboutUs = !this.showAboutUs;
  }
}
