import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ViewportScroller} from "@angular/common";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 100]);
  }
}
