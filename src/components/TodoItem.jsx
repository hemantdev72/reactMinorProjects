import React from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem() {
  const { todos } = useTodo();

  return todos.map((todo) => <p>{todos}</p>);
}

export default TodoItem;
