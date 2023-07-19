/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";

// infra
import AxiosService from "../../infra/services/http/axios/api";

// typings
import {
	types,
	type DataProps,
	type IDocumentDataResponse,
} from "./actions-types";

const instanceAxios = AxiosService.createAxiosInstance();

/**
 * Eu busco documentos de um usuário.
 */

const fetchAllDocuments = createAsyncThunk<IDocumentDataResponse, any>(
	types.GET_ALL_DOCUMENTS,

	// request document
	async ({ token, idAprovacao }: DataProps) =>
		await instanceAxios.get(`documentos/${Number(idAprovacao)}`, {})
);

const patchOneDocument = createAsyncThunk<IDocumentDataResponse, any>(
	types.GET_ALL_DOCUMENTS,

	// request updated document
	async ({ token, idDocument, dataOdUpdate }: DataProps) =>
		await instanceAxios.patch(
			`/documento/${Number(idDocument)}`,
			dataOdUpdate,
			{}
		)
);

/**
 * EXPORTS
 */
export { fetchAllDocuments, patchOneDocument };
