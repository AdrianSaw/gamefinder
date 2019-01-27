import { AbstractControl } from '@angular/forms';

export class PasswordValidation {
  static MatchPassword(AC: AbstractControl): void {
    const password: string = AC.get('password').value;
    const confirmPassword: string = AC.get('confirm_password').value;
    if (password.length < 6 && confirmPassword.length < 6 || password !== confirmPassword) {
      AC.get('confirm_password').setErrors({ NoPassswordMatch: true });
      AC.get('password').setErrors({ NoPassswordMatch: true });
    } else {
      AC.get('confirm_password').setErrors(null);
      AC.get('password').setErrors(null);
    }
  }
}
