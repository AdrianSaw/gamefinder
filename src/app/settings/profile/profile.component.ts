import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/core/models/user';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.getUserData().subscribe(data => {
      this.user = data;
    });
  }

}
