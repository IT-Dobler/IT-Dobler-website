import {ChangeDetectionStrategy, Component, HostListener, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'itd-sub-menu-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-menu-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
      })),
      state('closed', style({
        height: '0',
      })),
      transition('open => closed', [
        animate('0.3s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.3s ease-in-out')
      ]),
    ]),
  ]
})
export class SubMenuDropdownComponent {
  windowWidth: number = window.innerWidth;
  public LG_BREAKPOINT = 1024;
  public mobileAnimationsDisabled = this.windowWidth >= this.LG_BREAKPOINT;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mobileAnimationsDisabled = event.target.innerWidth >= this.LG_BREAKPOINT;
  }

  @Input() public showSubMenu = false;
}
