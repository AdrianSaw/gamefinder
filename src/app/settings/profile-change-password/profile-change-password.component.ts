import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PasswordValidation } from 'src/app/shared/validator/password.validation';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
  styleUrls: ['./profile-change-password.component.scss']
})
export class ProfileChangePasswordComponent implements OnInit {
  edit = false;
  changePasswordForm: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.changePasswordForm = this.fb.group({
      old_password: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  changePassword(): void {
    this.edit = !this.edit;
  }

  onChangePassword(): void {
    this.spinner.show();
    setTimeout(() => {
      this.toastr.success('Hasło zostało zmienione!');
      this.edit = !this.edit;
      this.changePasswordForm.reset();
      this.spinner.hide();
    }, 2000);
  }
}
