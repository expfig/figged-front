/**
 * IMPORTS
 */
import { type ActionReducerMapBuilder } from "@reduxjs/toolkit";

// actions
import * as actions from "./actions";

// typings
import { type IFilterstate } from "./interface";

/**
 * Eu sou um filtro redutor.
 */
const filter = (state: any, action: any) => {
	// set state
	state.filter = action?.payload?.data;
};

/**
 * Eu construo um redutor extra para filtrar.
 */
const buildFilter = (builder: ActionReducerMapBuilder<IFilterstate>): void => {
	builder.addCase(actions.fetchAllgroups.fulfilled, filter);
};

/**
 * EXPORTS
 */
export { buildFilter };
