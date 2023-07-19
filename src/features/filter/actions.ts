/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";

// infra
import AxiosService from "../../infra/services/http/axios/api";

// typings
import { types, type IFilterResponse, type Data } from "./actions-types";

const instanceAxios = AxiosService.createAxiosInstance();

const fetchAllgroups = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_GROUPS,

	// request fetch groups (grupos)
	async () => await instanceAxios.get(`/autocomplete/grupos`)
);

const fetchAllTypes = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch tipos
	async () => await instanceAxios.get(`/autocomplete/tipo`)
);

const fetchAllStatus = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch status
	async () => await instanceAxios.get(`/autocomplete/status`)
);

const fetchAllCoils = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_COILS,

	// request fetch coils(bobinas)
	async ({ token, page }: Data) =>
		await instanceAxios.get(
			`/autocomplete/numero_bobina?page=${Number(page)}`,
			{}
		)
);

const fetchAllDrivers = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_DRIVERS,

	// request fetch drivers(motoristas)
	async ({ token, page }: Data) =>
		await instanceAxios.get(`/autocomplete/motorista?page=${Number(page)}`)
);

const fetchAllPlates = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_PLATES,

	// request fetch plates(placas)
	async ({ token, page }: Data) =>
		await instanceAxios.get(`/autocomplete/placa?page=${Number(page)}`)
);

const fetchAllTripNumber = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TRIP_NUMBER,

	// request fetch trip number (numero de viagem)
	async ({ token, page }: Data) =>
		await instanceAxios.get(`/autocomplete/numero_viagem?page=${Number(page)}`)
);

/**
 * EXPORTS
 */
export {
	fetchAllgroups,
	fetchAllTypes,
	fetchAllStatus,
	fetchAllCoils,
	fetchAllDrivers,
	fetchAllPlates,
	fetchAllTripNumber,
};
