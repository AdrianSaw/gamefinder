import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import * as AuthActions from '../auth.actions';
import { StorageService } from 'src/app/core/services/storage/storage.service';


@Injectable()
export class IsAuthEffect {

  @Effect()
  isAuth = this.actions$.pipe(
    ofType(AuthActions.ActionsTypes.IS_AUTH),
    mergeMap( _ => {
      const token = this.storageService.getItem('token');
      if (token) {
        return [
          {
            type: AuthActions.ActionsTypes.SIGNIN
          },
          {
            type: AuthActions.ActionsTypes.SET_TOKEN,
            payload: token
          }
        ]
      } else {
        return [
          {
            type: AuthActions.ActionsTypes.LOGOUT
          }
        ]
      }
    })
  )


  constructor(
    private actions$: Actions,
    private storageService: StorageService) { }
}
