const initialState = {
  designs: [
    // {
    //   id: 1,
    //   name: "project1",
    //   tshirtColor: "black"
    // },
    // {
    //   id: 2,
    //   name: "project2",
    //   tshirtColor: "red"
    // },
    // {
    //   id: 3,
    //   name: "project3",
    //   tshirtColor: "blue"
    // },
    // {
    //   id: 4,
    //   name: "project4",
    //   tshirtColor: "white"
    // },
    // {
    //   id: 5,
    //   name: "project5",
    //   tshirtColor: "grey"
    // }
  ]
};
export const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DESIGN":
      return { ...state, designs: [...state.designs, action.design] };
    default:
      return state;
  }
};
