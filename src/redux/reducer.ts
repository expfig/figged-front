/**
 * IMPORTS
 */
import { combineReducers } from "redux";

// features
import { user } from "../features/user";
import { filter } from "../features/filter";

import { persistConfig, persistReducer } from "./persist";

/**
 * Eu crio um redutor de raiz.
 */
const reducer = combineReducers({
	[user.name]: user.reducer,
	[filter.name]: filter.reducer,
}) as any;

/**
 * Eu crio um redutor de raiz persistente..
 */
const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * EXPORTS
 */
export { persistedReducer, reducer };
