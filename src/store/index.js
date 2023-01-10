import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../apps/counter/counterSlice';
import todoReducer from "./slices/todoSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
});




