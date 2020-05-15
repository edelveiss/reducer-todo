import React, { useState, useReducer } from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todoList">
      {props.todoState
        .filter((itemName) => {
          return itemName.item
            .toLowerCase()
            .includes(props.searchTerm.toLowerCase());
        })
        .map((todoItem) => (
          <Todo
            todoItem={todoItem}
            key={todoItem.id}
            toggleTodoCompleted={props.toggleTodoCompleted}
          />
        ))}
    </div>
  );
};
export default TodoList;
