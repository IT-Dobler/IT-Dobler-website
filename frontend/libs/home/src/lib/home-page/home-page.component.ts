import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BulletListComponent,
  CardComponent,
  LanguageAndThemeAwareImageComponent, SingleColPageLayoutComponent,
  StandardPageLayoutComponent
} from "@frontend/ui";
import {TranslateModule} from "@ngx-translate/core";
import {
  StandardSectionLayoutComponent
} from "../../../../ui/src/lib/standard-section-layout/standard-section-layout.component";
import {RouterLink} from "@angular/router";
import {Path, selectTheme} from "@frontend/shared-angular";
import {FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";
import {Store} from "@ngrx/store";

@Component({
  selector: 'itd-home',
  standalone: true,
  imports: [CommonModule, StandardPageLayoutComponent, CardComponent, TranslateModule, StandardSectionLayoutComponent, BulletListComponent, LanguageAndThemeAwareImageComponent, RouterLink, SingleColPageLayoutComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly Path = Path;

  private store = inject(Store);
  private formBuilder = inject(NonNullableFormBuilder);

  themeSig = this.store.selectSignal(selectTheme);

  public form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: [''],
    message: ['']
  });

  public messageSig = toSignal(this.form.controls.message.valueChanges);

  public submit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
