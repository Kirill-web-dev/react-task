import React from "react";
import { useAppSelector } from "../hooks";
import TodoItem from "../components/TodoItem";

const AllTodo = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem {...item} />
      ))}
    </ul>
  );
};

export default AllTodo;
