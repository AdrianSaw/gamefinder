import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'core-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.storageService.clear();
    this.authService.isAuthenticated$.next(false);
  }

}
