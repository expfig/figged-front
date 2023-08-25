/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";

// infra
import AxiosService from "../../infra/services/http/axios/api";

// typings
import { types, type IApprovalResponse, type Data } from "./actions-types";

// functions
import { handleTransFormTextInString } from "../../utils/transform-string";
import { handleTransFormTextInNumber } from "../../utils/transform-number";

const instanceAxios = AxiosService.createAxiosInstance();

const fetchAllApprovals = createAsyncThunk<IApprovalResponse, any>(
	types.GET_ALL_APPROVAL,

	// request fetch groups
	async ({
		page,
		groupId,
		tipo,
		status,
		coilNumber,
		driverId,
		truckId,
		tripNumber,
	}: Data) =>
		await instanceAxios.get(
			`aprovacoes?page=${Number(page)}&group_id=${handleTransFormTextInNumber(
				groupId
			)}&type=${handleTransFormTextInString(
				tipo
			)}&status=${handleTransFormTextInString(
				status
			)}&coil_number=${handleTransFormTextInString(
				coilNumber
			)}&driver_id=${handleTransFormTextInNumber(
				driverId
			)}&truck_id=${handleTransFormTextInNumber(
				truckId
			)}&trip_number=${handleTransFormTextInString(tripNumber)}`
		)
);

const fetchAllApprovalsWithApprovedAndPendingStatus = createAsyncThunk<
	IApprovalResponse,
	any
>(
	types.GET_ALL_APPROVALS_WITH_APPROVED_STATUS,

	// request fetch groups
	async ({ page, status = "" }: Data) =>
		await instanceAxios.get(`/documentos?page=${Number(page)}&status=${status}`)
);

/**
 * EXPORTS
 */
export { fetchAllApprovals, fetchAllApprovalsWithApprovedAndPendingStatus };
