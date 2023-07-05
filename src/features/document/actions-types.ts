/**
 * IMPORTS
 */
import { type IDocumentState, NAME } from "./interface";

/**
 * Document response interface.
 */
export type IDocumentDataResponse = IDocumentState;

/**
 * Document action types.
 */
export const types = {
	GET_ALL_DOCUMENTS: `${NAME}/get-all-documents`,
};
