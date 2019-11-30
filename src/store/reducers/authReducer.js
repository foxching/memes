const initState = {
  authError: null
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: action.error
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_ERROR":
      return {
        ...state,
        authError: action.err
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.error
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};
