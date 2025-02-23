import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-linkedin-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinSvgComponent {
  @HostBinding('style.width.px') @Input() width: number = 32;

  public openLinedIn(): void {
    window.open('https://www.linkedin.com/company/it-dobler/about/', '_blank');
  }
}
