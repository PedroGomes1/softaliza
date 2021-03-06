import { AxiosResponse } from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { UserLoggedProps } from "./types";
import { ActionTypes } from "./types";
import { signInRequest, signInSuccess, signInFailure } from "./action";
import api from "../../../services/api";

type signInRequestType = ReturnType<typeof signInRequest>;

function* signIn({ payload }: signInRequestType) {
  const { email, password } = payload;

  try {
    const response: AxiosResponse<UserLoggedProps> = yield call(
      api.post,
      "session",
      {
        email,
        password,
      }
    );

    yield put(signInSuccess(response.data));
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (error) {
    yield put(signInFailure());
    toast.error("Erro ao fazer seu login");
  }
}

export function setToken({ payload }: any) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(ActionTypes.persistedUser, setToken),
  takeLatest(ActionTypes.signInRequest, signIn),
]);
