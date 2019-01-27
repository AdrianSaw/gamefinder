import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-bio',
  templateUrl: './profile-bio.component.html',
  styleUrls: ['./profile-bio.component.scss']
})
export class ProfileBioComponent implements OnInit {
  edit = false;
  changeBioForm: FormGroup;
  @Input() bio: string;

  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.changeBioForm = this.fb.group({
      bio: ['', [Validators.required]]
    });
  }

  editBio(): void {
    this.edit = !this.edit;
  }

  onBioChange(): void {
    this.spinner.show();
    setTimeout(() => {
      this.toastr.success('Opis został zmieniony!');
      this.edit = !this.edit;
      this.bio = this.changeBioForm.value.bio;
      this.changeBioForm.reset();
      this.spinner.hide();
    }, 2000);
  }

}
