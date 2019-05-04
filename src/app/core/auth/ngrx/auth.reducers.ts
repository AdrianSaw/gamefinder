import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};


export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.ActionsTypes.IS_AUTH: {
      return state;
    }

    case AuthActions.ActionsTypes.SIGNUP: {
      return {
        ...state,
        token: null,
        authenticated: false
      }
    }

    case AuthActions.ActionsTypes.SIGNIN: {
      return {
        ...state,
        authenticated: true
      }
    }

    case AuthActions.ActionsTypes.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }

    case AuthActions.ActionsTypes.LOGOUT: {
      return {
        token: null,
        authenticated: false
      }
    }

    default:
    return state;
  }
}
