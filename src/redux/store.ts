// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// const store = configureStore({ reducer: todoReducer });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const preloadedState = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState,
});

// Save todos to local storage whenever they are updated
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

export default store;
