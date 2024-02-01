import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-sun-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sun-svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunSvgComponent {}
