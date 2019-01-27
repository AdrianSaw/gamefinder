import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-email',
  templateUrl: './profile-email.component.html',
  styleUrls: ['./profile-email.component.scss']
})
export class ProfileEmailComponent implements OnInit {
  edit = false;
  changeEmailForm: FormGroup;

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.changeEmailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  editEmail(): void {
    this.edit = !this.edit;
  }

  onEmailChange(): void {
    this.spinner.show();
    setTimeout(() => {
      this.toastr.success('Email został zmieniony!');
      this.spinner.hide();
    }, 2000);
  }
}
