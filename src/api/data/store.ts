import { combineReducers, configureStore } from "@reduxjs/toolkit";
import{persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist"
import storage from "redux-persist/lib/storage";
import { auth } from "./auth";
import { api } from "../base";
import { startOptimizedAppearAnimation } from "motion/react";
import { setupListeners } from "@reduxjs/toolkit/query";


const rootConfig ={
    key:"root",
    storage
}

const rootReducer =combineReducers({
    [auth.name]:auth.reducer,
    [api.reducerPath]:api.reducer
})


const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};
// to use persist redux
const persistedReducer =persistReducer(rootConfig,rootReducer)

export const store =configureStore({
    reducer:persistedReducer,
    middleware:(m) =>m({serializableCheck}).concat(api.middleware)
})

export const persistor = persistStore(store);
// This line enables automatic refetching behavior for RTK Query, a tool from Redux Toolkit that handles API calls.

setupListeners(store.dispatch)