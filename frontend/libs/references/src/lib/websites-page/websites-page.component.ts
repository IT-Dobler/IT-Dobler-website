import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridPageLayoutComponent, SmallCardComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-websites-page',
  standalone: true,
  imports: [CommonModule, GridPageLayoutComponent, TranslateModule, SmallCardComponent],
  templateUrl: './websites-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsitesPageComponent {
}
