import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { designReducer } from "./designReducer";
import { filterReducer } from "./filterReducer";
import { asyncReducer } from "./asyncReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { reducer as toastrReducer } from "react-redux-toastr";

export const mainReducer = combineReducers({
  auth: authReducer,
  designs: designReducer,
  filters: filterReducer,
  async: asyncReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  toastr: toastrReducer
});
