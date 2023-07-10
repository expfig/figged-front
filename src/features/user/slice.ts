/**
 * IMPORTS
 */
import {
	type ActionReducerMapBuilder,
	createSlice,
	type Slice,
} from "@reduxjs/toolkit";

// hooks
import { trackRequest } from "../../redux/utils/trackrequest";

// reducers
import { buildLogin } from "./reducers";

// actions
import { login } from "./actions";

// states
import { initialState } from "./initialstate";

// typings
import { type IUserState, NAME } from "./interface";

/**
 * I am an user slice.
 */
const slice: Slice<IUserState> = createSlice({
	name: NAME,
	initialState,
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<IUserState>) => {
		// build reducers
		buildLogin(builder);

		// track requests
		trackRequest(builder, login);
	},
});

/**
 * EXPORTS
 */
export default slice;
