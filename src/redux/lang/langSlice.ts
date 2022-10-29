import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

// https://blog.logrocket.com/use-redux-next-js/

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.lang,
        };
      },
    },
  },
})

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;