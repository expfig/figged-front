/**
 * IMPORTS
 */
import { type ActionReducerMapBuilder } from "@reduxjs/toolkit";

// actions
import * as actions from "./actions";

// typings
import { type IApprovalstate } from "./interface";

/**
 * Eu sou um apovação redutor.
 */
const approval = (state: any, action: any) => {
	// set state
	state.approval = action?.payload?.data;
};

/**
 * Eu construo um redutor extra para apovação.
 */
const buildApproval = (
	builder: ActionReducerMapBuilder<IApprovalstate>
): void => {
	builder.addCase(actions.fetchAllApprovals.fulfilled, approval);
};

/**
 * EXPORTS
 */
export { buildApproval };
