import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleColPageLayoutComponent} from "@frontend/ui";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";

@Component({
  selector: 'itd-impressum',
  standalone: true,
  imports: [CommonModule, SingleColPageLayoutComponent, StandardSectionLayoutComponent],
  templateUrl: './impressum-page.component.html',
})
export class ImpressumPageComponent {}
