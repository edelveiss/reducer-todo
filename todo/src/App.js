import React, { useState, useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todoReducer, initialTodoState } from "./reducers/todoReducer";
import "./App.css";

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (todoName) => {
    if (
      todoName &&
      !todoState.find((itemName) => {
        return itemName.item.toLowerCase().includes(todoName.toLowerCase());
      })
    ) {
      const newTodo = { item: todoName, completed: false, id: Date.now() };
      dispatch({ type: "ADD_TODO", payload: newTodo });
    }
  };
  const toggleTodoCompleted = (todoID) => {
    dispatch({ type: "TOGGLE_TODO", payload: todoID });
  };
  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const handleFormChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <TodoForm
        addTodo={addTodo}
        todoState={todoState}
        clearCompleted={clearCompleted}
        handleFormChange={handleFormChange}
      />
      <TodoList
        todoState={todoState}
        toggleTodoCompleted={toggleTodoCompleted}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
