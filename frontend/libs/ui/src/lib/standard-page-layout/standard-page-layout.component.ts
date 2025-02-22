import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'itd-standard-page-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
