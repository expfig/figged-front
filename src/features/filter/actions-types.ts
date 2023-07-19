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

export interface Data {
	token: string;
	regionName?: string;
	page?: number;
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
	GET_ALL_TYPES: `${NAME}/get-all-types`,
	GET_ALL_STATUS: `${NAME}/get-all-status`,
	GET_ALL_COILS: `${NAME}/get-all-coils`,
	GET_ALL_DRIVERS: `${NAME}/get-all-drivers`,
	GET_ALL_PLATES: `${NAME}/get-all-plates`,
	GET_ALL_TRIP_NUMBER: `${NAME}/get-all-trip-number`,
};
