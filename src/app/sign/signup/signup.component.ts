import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StorageService } from 'src/app/core/storage/storage.service';
import { PasswordValidation } from '../password.validation';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
      rights: [false, Validators.requiredTrue]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  onSignUp() {
    console.log(this.signupForm);
    this.spinner.show();
    setTimeout(() => {
      this.toastr.success('Sprawdz swoją poczte email w celu dalszej aktywacji konta');
      this.router.navigateByUrl('signin');
      this.spinner.hide();
    }, 2000);
  }
}
