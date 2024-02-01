import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-moon-svg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moon-svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoonSvgComponent {}
