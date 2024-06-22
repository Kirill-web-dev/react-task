import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ITodoList, ITodoItem } from "../../models/todos";

const initialState: ITodoList = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodoItem = {
        id: Date.now(),
        body: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    removeTodoItem: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    removeAllCompleted: (state) => {
      state.todos.map((todo) => {
        if (todo.isCompleted) {
          state.todos = state.todos.filter((item) => item.id !== todo.id);
        }
      });
    },
    setTodoDone: (state, action: PayloadAction<number>) => {
      const toggleTodo = state.todos.find((item) => item.id === action.payload);
      if (toggleTodo) {
        toggleTodo.isCompleted = !toggleTodo.isCompleted;
      }
    },
  },
});

export const { getTodo, removeTodoItem, setTodoDone, removeAllCompleted } = todoSlice.actions;
export default todoSlice.reducer;
