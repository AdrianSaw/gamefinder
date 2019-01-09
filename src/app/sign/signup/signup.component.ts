import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StorageService } from 'src/app/core/storage/storage.service';

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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSignUp() {
    this.spinner.show();
    setTimeout(() => {
      this.authService.isAuthenticated$.next(true);
      this.authService.isAuthenticated$.subscribe(data => console.log(data));
      this.storageService.setItem('auth', true);
      this.spinner.hide();
    }, 2000);
  }
}
