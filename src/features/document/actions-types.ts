/**
 * IMPORTS
 */
import { type IDocumentState, NAME } from "./interface";

/**
 * Eu sou a tipagem da requisição da actions.
 */
export interface DataProps {
	idAprovacao: number;
	token: string;
}

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
