/**
 * IMPORTS
 */
import { type ActionReducerMapBuilder } from "@reduxjs/toolkit";

// actions
import * as actions from "./actions";

// typings
import { type IDocumentState } from "./interface";

/**
 * Eu sou um documento redutor.
 */
const document = (state: any, action: any) => {
	// set state
	state.document = action?.payload?.data;
};

/**
 * Eu construo um redutor extra para documento.
 */
const buildDocument = (
	builder: ActionReducerMapBuilder<IDocumentState>
): void => {
	builder.addCase(actions.fetchAllDocuments.fulfilled, document);
};

/**
 * EXPORTS
 */
export { buildDocument };
