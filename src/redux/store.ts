/* eslint-disable @typescript-eslint/no-shadow */
import { configureStore, type EnhancedStore } from "@reduxjs/toolkit";
import { type CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { persistStore } from "redux-persist";

import { persistedReducer, reducer } from "./reducer";

export const createStore = (): EnhancedStore => reducer;

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware<unknown>) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

const Persister = persistStore(store);

/**
 * EXPORTS
 */
export { store, Persister };
