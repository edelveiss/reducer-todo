import React, { useState, useReducer } from "react";
import Todo from "./Todo";
import clock from "../assets/clock.png";
import tl from "../assets/tl.png";
import timeIcon from "../assets/timeIcon.png";
const TodoList = (props) => {
  return (
    <div className="todoList">
      {props.todoState.length ? (
        <div className="clockS">
          <div className="clockSection" style={{ color: "red" }}>
            <div>
              <img src={tl} className="clockImgTime"></img>
            </div>
            <p>Start Time</p>
          </div>
          <div className="clockSection">
            <h1>ToDo List</h1>
          </div>
          <div className="clockSection" style={{ color: "rgb(52, 201, 52)" }}>
            <p>Done Time</p>
            <div>
              <img src={tl} className="clockImgTime"></img>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "green" }}>Well Done!!!</h1>
      )}
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
