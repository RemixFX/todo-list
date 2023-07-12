import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./reducers/themeSlice";
import { todoSlice } from "./reducers/todoSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    todo: todoSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;