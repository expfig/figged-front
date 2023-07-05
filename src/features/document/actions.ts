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
	async ({ idAprovacao, token }: DataProps) =>
		await axios.get(`${BASE_URL}/documentos/${idAprovacao}`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

/**
 * EXPORTS
 */
export { fetchAllDocuments };
