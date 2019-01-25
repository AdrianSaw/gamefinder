import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private authService: AuthenticationService,
    private router: Router
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
    this.router.navigateByUrl('');
  }

}
