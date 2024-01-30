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
      return 'bg-light-card-border-light-gold dark:bg-dark-card-border-light-gold'
    } else {
      return 'bg-light-card-border-gold dark:bg-dark-card-border-gold'
    }
  }
}
