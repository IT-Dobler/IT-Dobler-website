import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleColPageLayoutComponent} from "@frontend/ui";
import {Path} from "@frontend/shared-angular";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'itd-founder-page',
  standalone: true,
  imports: [CommonModule, SingleColPageLayoutComponent, StandardSectionLayoutComponent, TranslateModule, RouterLink],
  templateUrl: './founder-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FounderPageComponent {
  protected readonly Path = Path;
}
