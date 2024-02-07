import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent, SingleColPageLayoutComponent} from "@frontend/ui";
import {Path} from "@frontend/shared-angular";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-team-page',
  standalone: true,
  imports: [CommonModule, SingleColPageLayoutComponent, CardComponent, StandardSectionLayoutComponent, TranslateModule],
  templateUrl: './team-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPageComponent {
  protected readonly Path = Path;
}
