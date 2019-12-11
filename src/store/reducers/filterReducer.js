const filterState = {
  filterDate: "new"
};

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case "NEWEST":
      return { ...state, filterDate: "new" };
    case "OLDEST":
      return { ...state, filterDate: "old" };
    default:
      return state;
  }
};
