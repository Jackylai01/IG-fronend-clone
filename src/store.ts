import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "services/homeServices";
import friendsSlice from "slices/friendsSlice";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    friendsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
