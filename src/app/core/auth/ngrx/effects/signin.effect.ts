import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as AuthActions from '../auth.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { SigninInterface } from '../../../../shared/models/signin';

@Injectable()
export class SigninEffect {

  @Effect()
  authSignin = this.actions$.pipe(
    ofType(AuthActions.ActionsTypes.TRY_SIGNIN),
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: SigninInterface) => {
      return of(authData);
    }),
    switchMap(() => {
      return of('example_token: pjxQwertytesttest');
    }),
    mergeMap((token: string) => {
      this.storageService.setItem('token', token);
      this.router.navigate(['/profile']);
      return [
        {
          type: AuthActions.ActionsTypes.SIGNIN
        },
        {
          type: AuthActions.ActionsTypes.SET_TOKEN,
          payload: token
        }
      ]
    })
  )

  constructor(
    private actions$: Actions,
    private router: Router,
    private storageService: StorageService) { }
}
