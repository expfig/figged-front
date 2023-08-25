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
	page?: number;
	propFilter?: string;
}

/**
 * Filter response interface.
 */
export type IFilterResponse = IFilterstate;

/**
 * Filter action types.
 */
export const types = {
	// grupos
	GET_ALL_GROUPS: `${NAME}/get-all-groups`,
	// tipos
	GET_ALL_TYPES: `${NAME}/get-all-types`,
	// status
	GET_ALL_STATUS: `${NAME}/get-all-status`,
	// bobinas
	GET_ALL_COILS: `${NAME}/get-all-coils`,
	FILTER_COILS_NUMBER: `${NAME}/filter-coils-number`,
	// motoristas
	GET_ALL_DRIVERS: `${NAME}/get-all-drivers`,
	FILTER_DRIVERS_NAME: `${NAME}/filter-drivers-name`,
	// placas
	GET_ALL_PLATES: `${NAME}/get-all-plates`,
	FILTER_PLATES_NUMBER: `${NAME}/filter-plates-number`,
	// viagems
	GET_ALL_TRIP_NUMBER: `${NAME}/get-all-trip-number`,
	FILTER_TRIP_NUMBER: `${NAME}/filter-trip-number`,
};
