// eslint-disable-next-line no-shadow
export enum ActionTypes {
  signInRequest = "@auth/SIGN_IN_REQUEST",
  signInSuccess = "@auth/SIGN_IN_SUCCESS",
  signInFailure = "@auth/SIGN_IN_FAILURE",

  signOut = "@auth/SIGN_OUT",

  persistedUser = "persist/REHYDRATE",
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface UserLoggedProps {
  email: string;
  name: string;
  token: string;
  loading: boolean;
}
