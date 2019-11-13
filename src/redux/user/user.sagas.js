import { takeLatest, all, call, put } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
  createUserWithEmailAndPassword
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield signInFailure(error.message);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield signInFailure(error.message);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGNIN_START,
    signInWithEmailAndPassword
  );
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signUpUser({ payload: user }) {
  try {
    const userAuth = yield createUserWithEmailAndPassword(user);
    yield put(signUpSuccess());
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* onCreateUser() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}

export function* usersSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onCreateUser)
  ]);
}
