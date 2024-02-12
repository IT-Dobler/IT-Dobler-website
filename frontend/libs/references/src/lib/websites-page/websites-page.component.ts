import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridPageLayoutComponent, SmallCardComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {selectTheme} from "@frontend/shared-angular";

@Component({
  selector: 'itd-websites-page',
  standalone: true,
  imports: [CommonModule, GridPageLayoutComponent, TranslateModule, SmallCardComponent],
  templateUrl: './websites-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsitesPageComponent {
  private store = inject(Store);

  themeSig = this.store.selectSignal(selectTheme);
}
