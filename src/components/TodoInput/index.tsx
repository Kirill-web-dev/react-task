import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styles from "./TodoInput.module.scss";
import { useAppDispatch } from "../../hooks";
import { getTodo } from "../../redux/slice/todoSlice";

interface Props {
  openTodos: boolean;
  openTodosAndClose: () => void;
}

const TodoInput: React.FC<Props> = ({ openTodosAndClose, openTodos }) => {
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = React.useState<string>("");

  const getText = (value: string) => {
    setText(value);
  };
  const getTodoText = () => {
    if (text) {
      dispatch(getTodo(text));
    }
    setText("");
  };

  const clearTextField = () => {
    inputRef.current?.focus();
    setText("");
  };
  return (
    <div className={styles.input}>
      <span
        onClick={openTodosAndClose}
        style={openTodos ? { transform: "none" } : { transform: "rotate(-180deg)", top: "-18px" }}
      >
        <MdOutlineKeyboardArrowDown />
      </span>
      <div className={styles.field}>
        <input
          ref={inputRef}
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => getText(e.target.value)}
        />
        {text && <b onClick={clearTextField}>&times;</b>}
      </div>
      <button onClick={getTodoText}>Add Task</button>
    </div>
  );
};

export default TodoInput;
