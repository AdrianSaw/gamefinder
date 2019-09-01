import * as fromAuth from './reducers/auth.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './reducers/serializer.reducer';

export interface AppState {
  auth: fromAuth.State,
  router: RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  router: routerReducer
}

// Reducer selectors
export const selectReducerState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("router");

export const getRouterInfo = createSelector(
  selectReducerState,
  state => state.state
);
