import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-close-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './close-svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloseSvgComponent {}
