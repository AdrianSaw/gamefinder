import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { PasswordValidation } from 'src/app/shared/validator/password.validation';
import { ValidateEmail } from '../validator/email.validator';

import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx/app.reducers';
import * as AuthActions from '../../core/auth/ngrx/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, ValidateEmail]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      rights: [false, Validators.requiredTrue]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  onSignUp(): void {
    this.store.dispatch(new AuthActions.TrySignup(this.signupForm.value));
  }

}
