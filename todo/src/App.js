import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
