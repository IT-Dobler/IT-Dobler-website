import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Shade} from "../shade";

@Component({
  selector: 'itd-bullet-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bullet-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletListComponent {

  @Input() shade: Shade = 'gold';
  public getListPointClass(): string {
    // Defined in tailwind.config.js under listStyleImage
    if (this.shade === 'light-gold') {
      return 'list-image-list-point-gold';
    } else {
      return 'list-image-list-point-white dark:list-image-list-point-gold';
    }
  }
}
