/**
 * IMPORTS
 */
import { type IDocumentState, NAME } from "./interface";

/**
 * Eu sou o data que irar atualizar o documento
 */
export interface IDataOfUpdateProps {
	status: string;
	status_reprovado_mensagem: string;
	sec_users_id: string;
	data_atualizacao_usuario: string;
}

/**
 * Eu sou a tipagem da requisição da actions.
 */
export interface DataProps {
	idAprovacao: number;
	idDocument: number;
	token: string;
	dataOdUpdate: IDataOfUpdateProps;
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
	PATCH_ONE_DOCUMENT: `${NAME}/patch-one-document`,
};
