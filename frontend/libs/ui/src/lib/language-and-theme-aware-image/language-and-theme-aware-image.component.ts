import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Store} from "@ngrx/store";
import {selectLanguage, selectTheme} from "@frontend/shared-angular";

@Component({
  selector: 'itd-language-and-theme-aware-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './language-and-theme-aware-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageAndThemeAwareImageComponent {

  @Input() imageName!: string;
  @Input() altText: string | undefined;

  languageSig = this.store.selectSignal(selectLanguage);
  themeSig = this.store.selectSignal(selectTheme);

  constructor(private store: Store) {
  }

  public getImagePath(): string {
    return `assets/images/${this.themeSig()}-mode/${this.imageName}-${this.languageSig()}.svg`;
  }

}
