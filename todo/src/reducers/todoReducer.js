import moment from "moment";

export const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1528817077285,
    timeTodo: "2020-05-15 03:21:02",
    timeDone: "",
  },
  {
    item: "Baking Cookies",
    completed: false,
    id: 1528817084358,
    timeTodo: "2020-03-16 04:21:05",
    timeDone: "",
  },
  {
    item: "Shopping",
    completed: false,
    id: 1528817084359,
    timeTodo: "2020-03-18 03:18:12",
    timeDone: "",
  },
  {
    item: "Fixing the door",
    completed: false,
    id: 1528817084360,
    timeTodo: "2020-04-15 08:21:14",
    timeDone: "",
  },
  {
    item: "Meeting with friends",
    completed: false,
    id: 1528817084361,
    timeTodo: "2020-03-19 07:21:02",
    timeDone: "",
  },
  {
    item: "Home Work Project",
    completed: false,
    id: 1528817084362,
    timeTodo: "2020-05-10 10:25:02",
    timeDone: "",
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map((item) => {
        if (item.id === action.payload) {
          if (!item.completed) {
            return {
              ...item,
              completed: !item.completed,
              timeDone: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
            };
          } else {
            return {
              ...item,
              completed: !item.completed,
              timeDone: "",
            };
          }
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
