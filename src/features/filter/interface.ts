/**
 * IMPORTS
 */

/**
 * Filter types.
 */

export interface Filter {
	[x: string]: any;
	id: string | number;
	text: string;
	cpf?: string | null;
}

/**
 * Filter state interface.
 */
export interface IFilterstate {
	[x: string]: any;
	id?: string | number;
	filter: Filter;
}

/**
 * Filter slice name.
 */
export const NAME = "filter";
