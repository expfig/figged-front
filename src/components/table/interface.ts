/**
 * IMPORTS
 */

interface WrapperTextFooterProps {
	background?: boolean;
}

interface TextNumberPageProps {
	active?: boolean;
}

interface IApprovalRequest {
	id: string | number;
	status: string;
	coil_number: string;
	trip_number: string;
	type: string;
	driver_id: number;
	driver_name: string;
	placa: string;
	group_name: string;
	created_at: string;
	created_at_formatted: string;
}

interface IDataTableProps {
	data: IApprovalRequest[];
	pages: any[];
	firstPage: number;
	lastPage: number;
	onClickPreview: (page: number) => void;
	onClickNext: (page: number) => number;
}

interface IDataPagesProps {
	url: string;
	label: string;
	active: boolean;
}

/**
 * EXPORTS
 */
export type {
	WrapperTextFooterProps,
	TextNumberPageProps,
	IDataTableProps,
	IApprovalRequest,
	IDataPagesProps,
};
