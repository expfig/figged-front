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
import { buildFilter } from "./reducers";

// actions
import { fetchAllgroups } from "./actions";

// states
import { initialState } from "./initialstate";

// typings
import { type IFilterstate, NAME } from "./interface";

/**
 * I am an user slice.
 */
const slice: Slice<IFilterstate> = createSlice({
	name: NAME,
	initialState,
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<IFilterstate>) => {
		// build reducers
		buildFilter(builder);

		// track requests
		trackRequest(builder, fetchAllgroups);
	},
});

/**
 * EXPORTS
 */
export default slice;
