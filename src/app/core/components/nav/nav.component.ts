import { Component, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/settings/profile.service';

import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromAuth from '../../../ngrx/reducers/auth.reducers';
import * as fromApp from '../../../ngrx/app.reducers';
import * as AuthActions from '../../../ngrx/actions/auth.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  authState: Observable<fromAuth.State>;
  user: User;
  constructor(
    private profileService: ProfileService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.authState = this.store.select('auth');

    this.profileService.getUserData().subscribe( data => {
      this.user = data;
    });
  }

  logout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }

}
