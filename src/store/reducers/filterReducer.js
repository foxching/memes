const filterState = {
  filterDate: "new",
  show: 1
};

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case "NEWEST":
      return { ...state, filterDate: "new" };
    case "OLDEST":
      return { ...state, filterDate: "old" };
    case "SET_VALUE":
      return { ...state, show: action.val };
    default:
      return state;
  }
};
