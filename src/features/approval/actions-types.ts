/**
 * IMPORTS
 */
import { type IApprovalstate, NAME } from "./interface";

/**
 * Approval request interface.
 */
export interface IApprovalRequest {
	id: string | number;
	status: string;
	coil_number: string;
	trip_number: string;
	type: string;
	driver_name: string;
	placa: string;
	group_name: string;
	created_at: string;
	created_at_formatted: string;
}

/**
 * Approval response interface.
 */
export type IApprovalResponse = IApprovalstate;

/**
 * Approval action types.
 */
export const types = {
	GET_ALL_APPROVAL: `${NAME}/get-all-approval`,
};
