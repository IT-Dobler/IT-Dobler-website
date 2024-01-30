import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BulletListComponent,
  CardComponent,
  LanguageAndThemeAwareImageComponent, SingleColPageLayoutComponent,
  StandardPageLayoutComponent
} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";
import {RouterLink} from "@angular/router";
import {Path} from "@frontend/shared-angular";

@Component({
  selector: 'itd-home',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, CardComponent, TranslateModule, StandardSectionLayoutComponent, BulletListComponent, LanguageAndThemeAwareImageComponent, RouterLink, SingleColPageLayoutComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly Path = Path;
}
