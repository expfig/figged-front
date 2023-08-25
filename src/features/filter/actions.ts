/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";

// infra
import AxiosService from "../../infra/services/http/axios/api";

// typings
import { types, type IFilterResponse, type Data } from "./actions-types";

const instanceAxios = AxiosService.createAxiosInstance();

// GRUPOS (ISAURO NETO (B) OU RENATO FIGUEITEDO (A))
const fetchAllgroups = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_GROUPS,

	// request fetch groups (grupos)
	async () => await instanceAxios.get(`/autocomplete/grupos`)
);

/**
 * TIPOS (BOBINAS OU COMPROVANTES)
 */
const fetchAllTypes = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch tipos
	async () => await instanceAxios.get(`/autocomplete/tipo`)
);

/**
 * STATUS
 */
const fetchAllStatus = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TYPES,

	// request fetch status
	async () => await instanceAxios.get(`/autocomplete/status`)
);

/**
 * BOBINAS
 */
const fetchAllCoils = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_COILS,

	// request fetch coils(bobinas)
	async ({ page }: Data) =>
		await instanceAxios.get(
			`/autocomplete/numero_bobina?page=${Number(page)}`,
			{}
		)
);
const filterCoilsNumber = createAsyncThunk<IFilterResponse, any>(
	types.FILTER_COILS_NUMBER,

	// request fetch drivers(motoristas)
	async ({ page, propFilter }: Data) =>
		await instanceAxios.get(
			`/autocomplete/numero_bobina?page=${Number(page)}&q=${String(propFilter)}`
		)
);

/**
 * MOTORISTAS
 */
const fetchAllDrivers = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_DRIVERS,

	// request fetch drivers(motoristas)
	async ({ page }: Data) =>
		await instanceAxios.get(`/autocomplete/motorista?page=${Number(page)}}`)
);
const filterDriversName = createAsyncThunk<IFilterResponse, any>(
	types.FILTER_DRIVERS_NAME,

	// request fetch drivers(motoristas)
	async ({ page, propFilter }: Data) =>
		await instanceAxios.get(
			`/autocomplete/motorista?page=${Number(page)}&q=${String(propFilter)}`
		)
);

/**
 * PLACAS
 */
const fetchAllPlates = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_PLATES,

	// request fetch plates(placas)
	async ({ page }: Data) =>
		await instanceAxios.get(`/autocomplete/placa?page=${Number(page)}`)
);
const filterPlatesNumber = createAsyncThunk<IFilterResponse, any>(
	types.FILTER_PLATES_NUMBER,

	// request fetch drivers(motoristas)
	async ({ page, propFilter }: Data) =>
		await instanceAxios.get(
			`/autocomplete/placa?page=${Number(page)}&q=${String(propFilter)}`
		)
);

/**
 * NUMERO DE VIAGEM
 */
const fetchAllTripNumber = createAsyncThunk<IFilterResponse, any>(
	types.GET_ALL_TRIP_NUMBER,

	// request fetch trip number (numero de viagem)
	async ({ page }: Data) =>
		await instanceAxios.get(`/autocomplete/numero_viagem?page=${Number(page)}`)
);
const filterTripeNumber = createAsyncThunk<IFilterResponse, any>(
	types.FILTER_TRIP_NUMBER,

	// request fetch drivers(motoristas)
	async ({ page, propFilter }: Data) =>
		await instanceAxios.get(
			`/autocomplete/numero_viagem?page=${Number(page)}&q=${String(propFilter)}`
		)
);

/**
 * EXPORTS
 */
export {
	fetchAllgroups,
	fetchAllTypes,
	fetchAllStatus,
	fetchAllCoils,
	filterCoilsNumber,
	fetchAllDrivers,
	filterDriversName,
	fetchAllPlates,
	filterPlatesNumber,
	fetchAllTripNumber,
	filterTripeNumber,
};
