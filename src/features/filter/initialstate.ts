/**
 * IMPORTS
 */
import { type IFilterstate } from "./interface";

/**
 * Eu sou o estado inicial do filtro.
 */
const initialState: IFilterstate = {
	id: "",
	filter: {
		id: "",
		text: "",
		cpf: "",
	},
};

/**
 * EXPORTS
 */
export { initialState };
