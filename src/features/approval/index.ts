/**
 * IMPORTS
 */
import * as asyncActions from "./actions";
import approval from "./slice";

/**
 * Eu mesclo ações de fatia com ações assíncronas.
 */
const actions: any = {
	...asyncActions,
	...approval.actions,
};

/**
 * EXPORTS
 */
export { actions, approval };
