import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import langReducer from "./lang/langSlice";
import {createWrapper} from "next-redux-wrapper";

// https://blog.logrocket.com/use-redux-next-js/

const makeStore = () => configureStore({
  reducer: {
    lang: langReducer,
  },
  devTools: true,
});

export type IRootStore = ReturnType<typeof makeStore>
export type IRootState = ReturnType<IRootStore["getState"]>;
export type IRootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action
  >;

export const wrapper = createWrapper<IRootStore>(makeStore);