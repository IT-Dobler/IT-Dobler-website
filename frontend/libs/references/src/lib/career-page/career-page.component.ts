import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridPageLayoutComponent, SmallCardComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-career-page',
  standalone: true,
  imports: [CommonModule, GridPageLayoutComponent, TranslateModule, SmallCardComponent],
  templateUrl: './career-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerPageComponent {
}
