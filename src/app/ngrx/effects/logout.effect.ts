import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable()
export class LogoutEffect {


  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.ActionsTypes.LOGOUT),
    tap(_ => {
      this.router.navigateByUrl('');
      this.storageService.clear();
    })
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private storageService: StorageService) { }
}
