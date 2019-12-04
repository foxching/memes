import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { designReducer } from "./designReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as toastrReducer } from 'react-redux-toastr'

export const mainReducer = combineReducers({
  auth: authReducer,
  design: designReducer,
  firestore: firestoreReducer,
	firebase: firebaseReducer,
  toastr: toastrReducer
});
