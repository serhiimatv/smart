import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducers";

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
