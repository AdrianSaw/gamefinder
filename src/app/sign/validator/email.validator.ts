import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  if (!control.value.match(/\S+@\S+\.\S+/)) {
    return { validEmail: true };
  }
  return null;
}
