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
import { buildDocument } from "./reducers";

// actions
import { fetchAllDocuments } from "./actions";

// states
import { initialState } from "./initialstate";

// typings
import { type IDocumentState, NAME } from "./interface";

/**
 * Eu sou uma fatia de documento.
 */
const slice: Slice<IDocumentState> = createSlice({
	name: NAME,
	initialState,
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<IDocumentState>) => {
		// build reducers
		buildDocument(builder);

		// track requests
		trackRequest(builder, fetchAllDocuments);
	},
});

/**
 * EXPORTS
 */
export default slice;
