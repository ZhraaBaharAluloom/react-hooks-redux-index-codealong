import React from "react";
import { useSelector } from "react-redux";

function TodoContainer() {
  const toDoList = useSelector((state) => state.todos.entities).map(
    (todo, index) => <li key={index}>{todo}</li>
  );

  return <ul>{toDoList}</ul>;
}

export default TodoContainer;
