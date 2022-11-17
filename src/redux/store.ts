import { configureStore } from "@reduxjs/toolkit";

import wordsSlice from "./wordsSlice";

const store = configureStore({
  reducer: {
    search: wordsSlice,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
