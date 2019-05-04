import { Action } from '@ngrx/store';
import { SigninInterface } from '../../../shared/models/signin';
import { SignupInterface } from '../../../shared/models/signup';

export enum ActionsTypes {
  IS_AUTH = 'IS_AUTH',
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  TRY_SIGNIN = 'TRY_SIGNIN',
  TRY_SIGNUP = 'TRY_SIGNUP',
  LOGOUT = 'LOGOUT',
  SET_TOKEN = 'SET_TOKEN'
}

export class IsAuth implements Action {
  readonly type = ActionsTypes.IS_AUTH;
}

export class Signup implements Action {
  readonly type = ActionsTypes.SIGNUP;
}

export class TrySignup implements Action {
  readonly type = ActionsTypes.TRY_SIGNUP;

  constructor(public payload: SignupInterface) {}
}

export class Signin implements Action {
  readonly type = ActionsTypes.SIGNIN;
}

export class TrySignin implements Action {
  readonly type = ActionsTypes.TRY_SIGNIN;

  constructor(public payload: SigninInterface) {}
}

export class Logout implements Action {
  readonly type = ActionsTypes.LOGOUT;
}

export class SetToken implements Action {
  readonly type = ActionsTypes.SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions =
  IsAuth |
  Signup |
  Signin |
  TrySignin |
  TrySignup |
  Logout |
  SetToken;
