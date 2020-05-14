import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import { todoReducer, initialTodoState } from "../reducers/todoReducer";

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  return <div>TodoList</div>;
};
export default TodoList;
