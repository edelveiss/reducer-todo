export const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1528817077285,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Shopping",
    id: 1528817084359,
    completed: false,
  },
  {
    task: "Fixing the door",
    id: 1528817084360,
    completed: false,
  },
  {
    task: "Meeting with friends",
    id: 1528817084361,
    completed: false,
  },
  {
    task: "Home Work Project",
    id: 1528817084362,
    completed: false,
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
