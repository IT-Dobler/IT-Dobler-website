import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'itd-standard-section-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-section-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardSectionLayoutComponent {}
