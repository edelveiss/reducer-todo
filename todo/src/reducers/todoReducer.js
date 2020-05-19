import moment from "moment";

export const initialTodoState = [
  {
    item: "Baking Cookies",
    completed: false,
    id: 1528817084358,
    timeTodo: "March 16, 2020 4:21 pm",
    //timeTodo: "January 16, 2020 11:21 pm",
    timeDone: "",
  },
  {
    item: "Shopping",
    completed: false,
    id: 1528817084359,
    timeTodo: "March 18, 2020 3:18 pm",
    timeDone: "",
  },
  {
    item: "Meeting with friends",
    completed: false,
    id: 1528817084361,
    timeTodo: "March 19, 2020 7:00 pm",
    timeDone: "",
  },
  {
    item: "Fixing the door",
    completed: false,
    id: 1528817084360,
    timeTodo: "April 11, 2020 8:21 am",
    timeDone: "",
  },

  {
    item: "Learn about reducers",
    completed: false,
    id: 1528817077285,
    timeTodo: "May 15, 2020 3:21 pm",
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
              timeDone: moment(new Date()).format("LLL"),
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
