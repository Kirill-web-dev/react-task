import React from "react";
import { useAppSelector } from "../hooks";
import TodoItem from "../components/TodoItem";

const CompletedTodo = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos
        .filter((item) => item.isCompleted !== false)
        .map((item) => (
          <TodoItem {...item} />
        ))}
    </ul>
  );
};

export default CompletedTodo;
