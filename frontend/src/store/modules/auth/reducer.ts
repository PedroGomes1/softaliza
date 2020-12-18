/* eslint-disable consistent-return */
import { Reducer } from "redux";
import produce from "immer";
import { ActionTypes, UserLoggedProps } from "./types";

const INITIAL_STATE: UserLoggedProps = {
  email: "",
  name: "",
  token: "",
  loading: false,
};

const Auth: Reducer<UserLoggedProps> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.signInRequest: {
        draft.loading = true;
        break;
      }
      case ActionTypes.signInSuccess: {
        draft.loading = false;
        draft.name = action.payload.user.name;
        draft.email = action.payload.user.email;
        draft.token = action.payload.user.token;
        break;
      }
      case ActionTypes.signInFailure: {
        draft.loading = false;
        break;
      }
      case ActionTypes.signOut: {
        draft.token = "";
        break;
      }

      default:
        return state;
    }
  });
};

export default Auth;
