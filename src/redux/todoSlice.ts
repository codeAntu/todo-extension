import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Todo } from "../types";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[], // Changed this line
  reducers: {
    addTodo: (state, action) => {
      state.push({
        // Changed this line
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload); // Changed this line
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); // Changed this line
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = (state: Todo[]) => state;

export default todoSlice.reducer;
