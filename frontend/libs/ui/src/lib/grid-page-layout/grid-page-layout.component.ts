import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardPageLayoutComponent} from "../standard-page-layout/standard-page-layout.component";
import {CardComponent} from "../card-component/card.component";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {Path, selectTheme} from "@frontend/shared-angular";
import {CloseSvgComponent} from "../close-svg/close-svg.component";
import {Store} from "@ngrx/store";

@Component({
  selector: 'itd-grid-page-layout',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, CardComponent, RouterLink, TranslateModule, CloseSvgComponent],
  templateUrl: './grid-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPageLayoutComponent {
  @Input() titleKey!: string;
  @Input() logoName: string | undefined;
  @Input() themeLogos: boolean = false;

  private store = inject(Store);

  themeSig = this.store.selectSignal(selectTheme);

  public getImagePath(): string {
    return `assets/images/${this.themeLogos ? this.themeSig() + '-mode/' : ''}${this.logoName}.svg`;
  }

  protected readonly Path = Path;
}
