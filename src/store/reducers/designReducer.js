const designs = [];
export const designReducer = (state = designs, action) => {
  switch (action.type) {
    case "FETCH_DESIGN":
      return action.designs;
    case "CREATE_DESIGN_SUCCESS":
      console.log(action.design);
      return state;
    case "CREATE_DESIGN_ERROR":
      console.log(action.err);
      return state;
    case "UPDATE_SUCCESS":
      return state.map(design => {
        if (design.id === action.id) {
          return {
            ...design,
            ...action.updatedDesign
          };
        } else {
          return design;
        }
      });
    case "DELETE_DESIGN_SUCCESS":
      return state.filter(({ id }) => id !== action.id);
    case "DELETE_DESIGN_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};
