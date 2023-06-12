import React from "react";
import styles from "./TodoItem.module.scss";
import { ITodoItem } from "../../models/todos";
import { useAppDispatch } from "../../hooks";
import { removeTodoItem, setTodoDone } from "../../redux/slice/todoSlice";

const TodoItem: React.FC<ITodoItem> = ({ id, body, isCompleted }) => {
  const dispatch = useAppDispatch();

  const removeTodo = (id: number) => {
    dispatch(removeTodoItem(id));
  };
  const toggleTodo = (id: number) => {
    dispatch(setTodoDone(id));
  };
  return (
    <li
      key={id}
      className={styles.task}
      style={isCompleted ? { textDecoration: "line-through", opacity: "0.4" } : {}}
    >
      <input type="checkbox" checked={isCompleted} onChange={() => toggleTodo(id)} />
      <div>{body}</div>
      <span onClick={() => removeTodo(id)}>&times;</span>
    </li>
  );
};

export default TodoItem;
