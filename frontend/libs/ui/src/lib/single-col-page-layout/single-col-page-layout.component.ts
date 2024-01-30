import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandardPageLayoutComponent} from "../standard-page-layout/standard-page-layout.component";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'itd-single-col-page-layout',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, HeaderComponent, FooterComponent],
  templateUrl: './single-col-page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleColPageLayoutComponent {}
