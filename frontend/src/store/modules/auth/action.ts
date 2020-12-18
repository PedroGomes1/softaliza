import { SignInProps, UserLoggedProps, ActionTypes } from "./types";

export function signInRequest({ email, password }: SignInProps) {
  return {
    type: ActionTypes.signInRequest,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user: UserLoggedProps) {
  return {
    type: ActionTypes.signInSuccess,
    payload: {
      user,
    },
  };
}

export function signInFailure() {
  return {
    type: ActionTypes.signInFailure,
  };
}

export function signOut() {
  return {
    type: ActionTypes.signOut,
  };
}
