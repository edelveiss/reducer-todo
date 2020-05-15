export const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1528817077285,
  },
  {
    item: "Bake Cookies",
    completed: false,
    id: 1528817084358,
  },
  {
    item: "Shopping",
    completed: false,
    id: 1528817084359,
  },
  {
    item: "Fixing the door",
    completed: false,
    id: 1528817084360,
  },
  {
    item: "Meeting with friends",
    completed: false,
    id: 1528817084361,
  },
  {
    item: "Home Work Project",
    completed: false,
    id: 1528817084362,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

    case "ADD_TODO":
      return [...state, action.payload];
    case "CLEAR_COMPLETED":
      return state.filter((item) => {
        return !item.completed;
      });
    default:
      return state;
  }
};
