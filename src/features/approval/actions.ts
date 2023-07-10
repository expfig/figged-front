/**
 * IMPORTS
 */
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createAxiosInstance } from "../../infra/services/http/axios/api";
import axios from "axios";

import { types, type IApprovalResponse, type Data } from "./actions-types";
import { handleTransFormTextInString } from "../../utils/transform-string";
import { handleTransFormTextInNumber } from "../../utils/transform-number";

const BASE_URL = "http://10.0.0.155:1111/figged";

const fetchAllApprovals = createAsyncThunk<IApprovalResponse, any>(
	types.GET_ALL_APPROVAL,

	// request fetch groups
	async ({
		token,
		page,
		groupId,
		tipo,
		status,
		coilNumber,
		driverId,
		truckId,
	}: Data) =>
		await axios.get(
			`${BASE_URL}/aprovacoes?page=${Number(
				page
			)}&group_id=${handleTransFormTextInNumber(
				groupId
			)}&type=${handleTransFormTextInString(
				tipo
			)}&status=${handleTransFormTextInString(
				status
			)}&coil_number=${handleTransFormTextInNumber(
				coilNumber
			)}&driver_id=${handleTransFormTextInNumber(
				driverId
			)}&truck_id=${handleTransFormTextInNumber(truckId)}`,
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		)
);

const fetchAllApprovalsWithApprovedStatus = createAsyncThunk<
	IApprovalResponse,
	any
>(
	types.GET_ALL_APPROVALS_WITH_APPROVED_STATUS,

	// request fetch groups
	async ({ token, page, status = "" }: Data) =>
		await axios.get(
			`${BASE_URL}/aprovacoes?page=${Number(page)}&status=${status}`,
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		)
);

/**
 * EXPORTS
 */
export { fetchAllApprovals, fetchAllApprovalsWithApprovedStatus };
