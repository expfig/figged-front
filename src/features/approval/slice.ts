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
import { buildApproval } from "./reducers";

// actions
import { fetchAllApprovals } from "./actions";

// states
import { initialState } from "./initialstate";

// typings
import { type IApprovalstate, NAME } from "./interface";

/**
 * Eu sou uma fatia de aprovação.
 */
const slice: Slice<IApprovalstate> = createSlice({
	name: NAME,
	initialState,
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<IApprovalstate>) => {
		// build reducers
		buildApproval(builder);

		// track requests
		trackRequest(builder, fetchAllApprovals);
	},
});

/**
 * EXPORTS
 */
export default slice;
