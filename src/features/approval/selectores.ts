/**
 * IMPORTS
 */
import { approval } from ".";
import { type IApprovalstate } from "./interface";

/**
 * Eu seleciono a fatia de aprovação do estado.
 */
const selectSliceApproval = (state: any): IApprovalstate =>
	state[approval.name];

const selectApproval = (state: any): any =>
	selectSliceApproval(state)?.approval;

/**
 * EXPORTS
 */
export { selectSliceApproval, selectApproval };
