/**
 * IMPORTS
 */
import { filter } from "./";
import { type IFilterstate } from "./interface";

/**
 * I select the user slice from state.
 */
const selectSliceFilter = (state: any): IFilterstate => state[filter.name];

const selectFilter = (state: any): any => selectSliceFilter(state)?.filter;

/**
 * EXPORTS
 */
export { selectSliceFilter, selectFilter };
