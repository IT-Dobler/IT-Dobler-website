import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BulletListComponent, CardComponent, StandardPageLayoutComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";

@Component({
  selector: 'itd-home',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, CardComponent, TranslateModule, StandardSectionLayoutComponent, BulletListComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
}
