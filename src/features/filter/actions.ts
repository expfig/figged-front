/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createAxiosInstance } from "../../infra/services/http/axios/api";
import axios from "axios";
import { types, type IFilterResponse } from "./actions-types";

const BASE_URL = "http://10.0.0.155:1111/figged";

interface Data {
	token: string;
	regionName?: string;
	page?: number;
}

const fetchAllgroups = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_GROUPS,

	// request fetch
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/grupos`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllTypes = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/tipo`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllStatus = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch
	async ({ token }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/status`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

const fetchAllDrivers = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_DRIVERS,

	// request fetch
	async ({ token, page }: Data) =>
		await axios.get(`${BASE_URL}/autocomplete/motorista?page=${Number(page)}`, {
			headers: {
				Authorization: `Token ${token}`,
			},
		})
);

/**
 * EXPORTS
 */
export { fetchAllgroups, fetchAllTypes, fetchAllStatus, fetchAllDrivers };
