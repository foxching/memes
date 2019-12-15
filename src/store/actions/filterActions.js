import { getDesigns } from "./designAction";

export const filterNewest = () => {
  return (dispatch, getState) => {
    dispatch({ type: "NEWEST" });
    dispatch(getDesigns());
  };
};

export const filterOldest = () => {
  return (dispatch, getState) => {
    dispatch({ type: "OLDEST" });
    dispatch(getDesigns());
  };
};

export const setValue = val => {
  return (dispatch, getState) => {
    dispatch({ type: "SET_VALUE", val });
    dispatch(getDesigns());
  };
};
