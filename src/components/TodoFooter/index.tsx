import React from "react";
import { Link } from "react-router-dom";
import styles from "./TodoFooter.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeAllCompleted } from "../../redux/slice/todoSlice";

const TodoFooter = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const removeCompleted = () => {
    dispatch(removeAllCompleted());
  };
  return (
    <div className={styles.content}>
      <div className="left">{todos.length} items left</div>
      <div className={styles.chooser}>
        <p>Filter by:</p>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
          <li>
            <Link to="/done">Completed</Link>
          </li>
        </ul>
      </div>
      <div className={styles.clear__all} onClick={removeCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default TodoFooter;
