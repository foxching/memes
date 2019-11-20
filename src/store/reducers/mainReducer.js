import { combineReducers } from "redux";
import authReducer from "./authReducer";
import designReducer from "./designReducer";

export const mainReducer = combineReducers({
  auth: authReducer,
  design: designReducer
});
