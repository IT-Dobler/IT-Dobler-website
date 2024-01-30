import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent, GridPageLayoutComponent, SmallCardComponent} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'frontend-contractor',
  standalone: true,
  imports: [CommonModule, GridPageLayoutComponent, CardComponent, TranslateModule, SmallCardComponent],
  templateUrl: './contractor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractorComponent {}
