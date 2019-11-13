import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case UserActionTypes.SIGN_OUT_START:
    // case UserActionTypes.GOOGLE_SIGNIN_START:
    // case UserActionTypes.EMAIL_SIGNIN_START:
    //   return {
    //     ...state
    //   };
    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGNIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
