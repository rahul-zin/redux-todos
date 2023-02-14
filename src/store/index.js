import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../apps/todo/slices/todoSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
});




