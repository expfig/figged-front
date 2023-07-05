/**
 * IMPORTS
 */

/**
 * Approval types.
 */

interface IApprovalProps {
	code: number;
	data: {
		data: [
			{
				id: string;
				status: string;
				coil_number: string;
				trip_number: string;
				type: string;
				driver_name: string;
				placa: string;
				group_name: string;
				created_at: string;
				created_at_formatted: string;
			}
		];
		current_page: null;
		first_page_url: "";
		from: null;
		last_page: null;
		last_page_url: null;
		links: [
			{
				url: null;
				label: "";
				active: false;
			}
		];
		next_page_url: "";
		path: "";
		per_page: null;
		prev_page_url: null;
		to: null;
		total: null;
	};
}

export type Approval = Record<any, IApprovalProps>;

/**
 * Approval state interface.
 */
export interface IApprovalstate {
	[x: string]: any;
	approval: IApprovalProps;
}

/**
 * Approval slice name.
 */
export const NAME = "approval";
