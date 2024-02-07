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

@Component({
  selector: 'itd-header',
  standalone: true,
  imports: [CommonModule, RouterLink, LanguageSelectComponent, LanguageAndThemeAwareImageComponent, TranslateModule, ThemeSelectComponent, LinkedinSvgComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected readonly Path = Path;

  public openLinedIn(): void {
    window.open('https://www.linkedin.com/in/yanicdobler/', '_blank');
  }
}
