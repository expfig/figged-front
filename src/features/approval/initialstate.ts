/**
 * IMPORTS
 */
import { type IApprovalstate } from "./interface";

/**
 * Eu sou o estado inicial do filtro.
 */

const initialState: IApprovalstate = {
	approval: {
		code: 0,
		data: {
			data: [
				{
					id: "",
					status: "",
					coil_number: "",
					trip_number: "",
					type: "",
					driver_name: "",
					placa: "",
					group_name: "",
					created_at: "",
					created_at_formatted: "",
				},
			],
			current_page: null,
			first_page_url: "",
			from: null,
			last_page: null,
			last_page_url: null,
			links: [
				{
					url: null,
					label: "",
					active: false,
				},
			],
			next_page_url: "",
			path: "",
			per_page: null,
			prev_page_url: null,
			to: null,
			total: null,
		},
	},
};

/**
 * EXPORTS
 */
export { initialState };
