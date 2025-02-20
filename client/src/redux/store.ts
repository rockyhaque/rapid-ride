import { configureStore } from "@reduxjs/toolkit";
import { bicyclesApi } from "./features/bicyclesApi";

export const store = configureStore({
  reducer: {
    [bicyclesApi.reducerPath]: bicyclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bicyclesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
