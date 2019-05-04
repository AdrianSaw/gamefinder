import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx/app.reducers';
import * as fromAuth from '../auth/ngrx/auth.reducers';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  isAuthenticated: boolean;

  constructor(
    private store: Store<fromApp.AppState>,
    public router: Router
  ) {
    this.store.select('auth').pipe(
      map((authState: fromAuth.State) => authState.authenticated))
        .subscribe(auth => this.isAuthenticated = auth);
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.isAuthenticated) {
      this.router.navigateByUrl('signin');
      return false;
    }
    return true;
  }
}
