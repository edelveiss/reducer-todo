export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: Date.now(),
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETED":
      return {
        ...state,
        //editing: !state.editing,
      };
    case "ADD_NEW_ITEM":
      return {
        ...state,
        // editing: !state.editing,
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        // title: action.payload,
        // editing: false,
      };
    default:
      return state;
  }
};
