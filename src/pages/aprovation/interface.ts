/**
 * IMPORTS
 */

interface DocumentProps {
	id: number;
	status: string;
	user: string;
	file_url: string;
}

interface IAprovacaoProps {
	id: number;
	coild_number: number;
	status: string;
	type: string;
	formatted_updated_at: string;
	updated_at: string;
}

interface IDocumentDataResponse {
	code: number;
	data: DocumentProps[];
	aprovacao: IAprovacaoProps;
}

interface IDataPagesProps {
	url: string;
	label: string;
	active: boolean;
}

interface IDataTable {
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

/**
 * EXPORTS
 */
export type {
	IDocumentDataResponse,
	IAprovacaoProps,
	IDataPagesProps,
	IDataTable,
};
