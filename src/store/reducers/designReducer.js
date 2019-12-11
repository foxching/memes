const designs = [];
export const designReducer = (state = designs, action) => {
  switch (action.type) {
    case "FETCH_DESIGN":
      console.log(action.designs);
      return action.designs;
    case "CREATE_DESIGN_SUCCESS":
      console.log(action.design);
      return state;
    case "CREATE_DESIGN_ERROR":
      console.log(action.err);
      return state;
    case "DELETE_DESIGN_SUCCESS":
      console.log("delete success");
      return state;
    case "DELETE_DESIGN_ERROR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};
