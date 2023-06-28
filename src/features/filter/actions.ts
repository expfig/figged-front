/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createAxiosInstance } from "../../infra/services/http/axios/api";
import axios from "axios";
import { types } from "./actions-types";

const BASE_URL = "http://10.0.0.155:1111/figged";

interface Data {
	token: string;
}

const fetchAllgroups = createAsyncThunk<any, any>(
	types.GET_ALL_GROUPS,

	// request fetch
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/grupos`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

/**
 * EXPORTS
 */
export { fetchAllgroups };
