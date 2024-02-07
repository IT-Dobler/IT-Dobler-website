import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BulletListComponent,
  CardComponent,
  SingleColPageLayoutComponent,
  StandardPageLayoutComponent
} from "@frontend/ui";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";
import {TranslateModule} from "@ngx-translate/core";
import {Path} from "@frontend/shared-angular";

@Component({
  selector: 'itd-our-stack-page',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, BulletListComponent, CardComponent, StandardSectionLayoutComponent, TranslateModule, SingleColPageLayoutComponent],
  templateUrl: './our-stack-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurStackPageComponent {
  protected readonly Path = Path;
}
