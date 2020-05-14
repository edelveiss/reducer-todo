import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todoReducer, initialTitleState } from "./reducers/todoReducer";

import "./App.css";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
// import { fade, makeStyles } from "@material-ui/core/styles";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
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

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
