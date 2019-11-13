import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = errorMesage => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  error: errorMesage
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = errorMesage => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMesage
});

export const signUpStart = userCredentials => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = () => ({
  type: UserActionTypes.SIGN_UP_SUCCESS
});

export const signUpFailure = errorMessage => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: errorMessage
});
