import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Shade} from "../shade";

@Component({
  selector: 'itd-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title!: string;
  @Input() shade: Shade = 'gold';

  public getBackgroundClass(): string {
    // Defined in tailwind.config.js under backgroundImage
    if (this.shade === 'light-gold') {
      return 'bg-light-gold dark:bg-transparent dark:border-[6px] dark:border-light-gold rounded-tl-[3rem] lg:rounded-tl-[5rem] rounded-br-[8rem] lg:rounded-br-[13rem]';
    } else {
      return 'bg-gold dark:bg-transparent dark:border-[6px] dark:border-gold rounded-tl-[3rem] lg:rounded-tl-[5rem] rounded-br-[8rem] lg:rounded-br-[13rem]';
    }
  }
}
