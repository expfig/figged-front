/**
 * IMPORTS
 */
import { type IDocumentState } from "./interface";

/**
 * Eu sou o estado inicial do documento.
 */
const initialState: IDocumentState = {
	document: {
		code: 0,
		data: [
			{
				id: null,
				status: "",
				user: "",
				file_url: "",
			},
		],
	},
};

/**
 * EXPORTS
 */
export { initialState };
