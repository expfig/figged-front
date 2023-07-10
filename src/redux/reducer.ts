/**
 * IMPORTS
 */
import { combineReducers } from "redux";

// features
import { user } from "../features/user";
import { filter } from "../features/filter";
import { approval } from "../features/approval";
import { document } from "../features/document";

import { persistConfig, persistReducer } from "./persist";

/**
 * Eu crio um redutor de raiz.
 */
const reducer = combineReducers({
	[user.name]: user.reducer,
	[filter.name]: filter.reducer,
	[approval.name]: approval.reducer,
	[document.name]: document.reducer,
}) as any;

/**
 * Eu crio um redutor de raiz persistente..
 */
const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * EXPORTS
 */
export { persistedReducer, reducer };
