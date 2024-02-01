import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridPageLayoutComponent, SmallCardComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-it-dobler-page',
  standalone: true,
  imports: [CommonModule, GridPageLayoutComponent, TranslateModule, SmallCardComponent],
  templateUrl: './it-dobler-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItDoblerPageComponent {
}
