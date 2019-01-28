import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from 'src/app/settings/profile.service';

import { AuthenticationService } from '../auth/auth.service';
import { StorageService } from '../storage/storage.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  auth: boolean;
  user: User;
  constructor(
    private storageService: StorageService,
    private authService: AuthenticationService,
    private router: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe( auth => {
      this.auth = auth;
      console.log(this.auth);
    });

    this.profileService.getUserData().subscribe( data => {
      this.user = data;
    });
  }

  logout(): void {
    this.storageService.clear();
    this.authService.isAuthenticated$.next(false);
    this.router.navigateByUrl('');
  }

}
