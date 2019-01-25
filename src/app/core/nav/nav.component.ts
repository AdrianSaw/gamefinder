import { Component, OnInit } from '@angular/core';

import { StorageService } from '../storage/storage.service';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  auth: boolean;
  constructor(
    private storageService: StorageService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(auth => {
      this.auth = auth;
      console.log(this.auth);
    });
  }

  logout(): void {
    this.storageService.clear();
    this.authService.isAuthenticated$.next(false);
  }

}
