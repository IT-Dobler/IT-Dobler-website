import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardPageLayoutComponent} from "../standard-page-layout/standard-page-layout.component";
import {CardComponent} from "../card-component/card.component";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {Path} from "@frontend/shared-angular";

@Component({
  selector: 'itd-grid-page-layout',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, CardComponent, RouterLink, TranslateModule],
  templateUrl: './grid-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridPageLayoutComponent {
  @Input() titleKey!: string;
  @Input() logoName: string | undefined;

  public getImagePath(): string {
    return `assets/images/${this.logoName}.svg`;
  }

  protected readonly Path = Path;
}
