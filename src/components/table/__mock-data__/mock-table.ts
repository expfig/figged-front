/**
 * IMPORTS
 */

interface IDataPagesProps {
	url: string;
	label: string;
	active: boolean;
}

const pages: IDataPagesProps[] = [
	{
		url: "http://localhost.com.br",
		active: true,
		label: "1",
	},
	{
		url: "http://localhost.com.br",
		active: false,
		label: "2",
	},
];

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
const dataTable: IApprovalRequest[] = [
	{
		id: 374822,
		coil_number: "23370945C",
		status: "aguardando",
		trip_number: "367217",
		type: "bobina",
		driver_id: 77,
		driver_name: "MARCOS RODRIGO ALMEIDA",
		placa: "RNG7A17",
		group_name: "Isauro Neto(B)",
		created_at: "2023-07-16 16:06:18",
		created_at_formatted: "16/07/2023 16:06",
	},
];

/**
 * EXPORT
 */
export { type IApprovalRequest, type IDataPagesProps, dataTable, pages };
