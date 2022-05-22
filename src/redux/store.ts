import { configureStore } from '@reduxjs/toolkit'
import langReducer from "./lang/langSlice";


const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;