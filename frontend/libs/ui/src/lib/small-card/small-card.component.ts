import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-small-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './small-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardComponent {
  @Input() titleKey!: string;
}
