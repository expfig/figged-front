/**
 * IMPORTS
 */
import * as asyncActions from "./actions";
import document from "./slice";

/**
 * Eu mesclo ações de fatia com ações assíncronas.
 */
const actions: any = {
	...asyncActions,
	...document.actions,
};

/**
 * EXPORTS
 */
export { actions, document };
