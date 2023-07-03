/**
 * IMPORTS
 */
import * as asyncActions from "./actions";
import filter from "./slice";

/**
 * Eu mesclo ações de fatia com ações assíncronas.
 */
const actions: any = {
	...asyncActions,
	...filter.actions,
};

/**
 * EXPORTS
 */
export { actions, filter };
