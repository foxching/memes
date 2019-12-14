import { getDesigns } from "./designAction";

// export const filterNewest = () => ({
//   type: "NEWEST"
// });

export const filterNewest = () => {
  return (dispatch, getState) => {
    dispatch({ type: "NEWEST" });
    dispatch(getDesigns());
  };
};

// export const filterOldest = () => ({
//   type: "OLDEST"
// });

export const filterOldest = () => {
  return (dispatch, getState) => {
    dispatch({ type: "OLDEST" });
    dispatch(getDesigns());
  };
};
