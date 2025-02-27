import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  BulletListComponent,
  CardComponent,
  LanguageAndThemeAwareImageComponent,
  SingleColPageLayoutComponent,
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
import {HttpClient} from "@angular/common/http";
import {LinkedinSvgComponent} from "../../../../ui/src/lib/linkedin-svg/linkedin-svg.component";

@Component({
  selector: 'itd-home',
  standalone: true,
  imports: [CommonModule, CardComponent, TranslateModule, StandardSectionLayoutComponent, BulletListComponent, LanguageAndThemeAwareImageComponent, RouterLink, SingleColPageLayoutComponent, FormsModule, ReactiveFormsModule, LinkedinSvgComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly Path = Path;

  private store = inject(Store);
  private formBuilder = inject(NonNullableFormBuilder);
  private httpClient = inject(HttpClient);

  themeSig = this.store.selectSignal(selectTheme);

  public form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: [''],
    message: ['']
  });

  public submitStateSig: WritableSignal<string> = signal('default');

  public messageSig = toSignal(this.form.controls.message.valueChanges);

  public submit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.submitStateSig.set('working');
      this.httpClient.post('https://it-dobler-api.azurewebsites.net/api/SendEmail', this.form.value).subscribe({
        next: _ => {
          this.form.reset();
          this.submitStateSig.set('done');
        },
        error: _ => {
          this.submitStateSig.set('error');
        }
      });
    }
  }
}
