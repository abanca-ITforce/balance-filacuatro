import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

  constructor() { }

  hasErrors(form: FormGroup, controlName: string) {
    const control = form.controls[controlName].invalid;
    return control;
  }
  isTouched(form: FormGroup, controlName: string) {
    const control = form.controls[controlName].touched;
    return control;
  }

  hasError(form: FormGroup, controlName: string, errorName: string) {
    const control = form.controls[controlName];
    return control.hasError(errorName);
  }
}
