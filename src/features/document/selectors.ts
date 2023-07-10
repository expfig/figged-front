/**
 * IMPORTS
 */
import { document } from "./";
import { type IDocumentState } from "./interface";

/**
 * Eu seleciono a fatia do documento do estado.
 */
const selectSliceDocument = (state: any): IDocumentState =>
	state[document.name];

const selectDocument = (state: any): any =>
	selectSliceDocument(state)?.document;

/**
 * EXPORTS
 */
export { selectSliceDocument, selectDocument };
