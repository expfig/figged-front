/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { http } from '../../infra/http/http';
import axios from "axios";
import {
	types,
	type DataProps,
	type IDocumentDataResponse,
} from "./actions-types";

const BASE_URL = "http://grupofigueiredo.com.br:1111/figged";

/**
 * Eu busco documentos de um usuário.
 */

const fetchAllDocuments = createAsyncThunk<IDocumentDataResponse, any>(
	types.GET_ALL_DOCUMENTS,

	// request document
	async ({ token, idAprovacao }: DataProps) =>
		await axios.get(`${BASE_URL}/documentos/${Number(idAprovacao)}`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const patchOneDocument = createAsyncThunk<IDocumentDataResponse, any>(
	types.GET_ALL_DOCUMENTS,

	// request document
	async ({ token, idDocument, dataOdUpdate }: DataProps) =>
		await axios.patch(
			`${BASE_URL}/documento/${Number(idDocument)}`,
			dataOdUpdate,
			{
				headers: {
					Authorization: `Token ${token}`,
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json",
				},
			}
		)
);

/**
 * EXPORTS
 */
export { fetchAllDocuments, patchOneDocument };
