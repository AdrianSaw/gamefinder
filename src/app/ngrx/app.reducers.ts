import * as fromAuth from '../core/auth/ngrx/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer
}
