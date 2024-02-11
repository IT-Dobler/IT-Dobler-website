import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'itd-sub-menu-toggle-indicator',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './sub-menu-toggle-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('spin', [
      state('default', style({ transform: 'rotate(0)', opacity: 0})),
      state('rotated', style({ transform: 'rotate(180deg)', opacity: 1})),
      transition('rotated <=> default', animate('200ms ease-in-out'))
    ]),
  ]
})
export class SubMenuToggleIndicatorComponent {
  @Input() public subMenuOpen!: boolean;
}
