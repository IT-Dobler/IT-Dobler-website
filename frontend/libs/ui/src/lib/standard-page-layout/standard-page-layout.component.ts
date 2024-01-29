import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'itd-standard-page-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './standard-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
