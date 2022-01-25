import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../store/counter-slice';
import { apiSlice } from "./stocks-slice";

export const store = configureStore({
    reducer: { 
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;