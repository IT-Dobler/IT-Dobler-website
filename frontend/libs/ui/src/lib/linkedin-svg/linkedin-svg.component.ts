import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-linkedin-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linkedin-svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinSvgComponent {}
