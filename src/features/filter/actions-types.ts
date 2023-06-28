/**
 * IMPORTS
 */
import { type IFilterstate, NAME } from "./interface";

/**
 * Filter request interface.
 */
export interface IFilterRequest {
	id: string | number;
	text: string;
	cpf: string;
}

/**
 * Filter response interface.
 */
export type IFilterResponse = IFilterstate;

/**
 * Filter action types.
 */
export const types = {
	GET_ALL_GROUPS: `${NAME}/get-all-groups`,
};
