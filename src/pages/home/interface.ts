/**
 * IMPORTS
 */

// tipagem dados vindo da api
interface IFilterDataProps {
	id: string | number;
	text: string;
	cpf?: string;
}

// tipagem da request do redux
interface IFilterRequestProps {
	type: string;
	payload: {
		data: {
			data: Array<{
				id: string | number;
				text: string;
			}>;
		};
		status: string;
		statusText: string;
		headers: string;
		config: {
			transitional: {
				silentJSONParsing: boolean;
				forcedJSONParsing: boolean;
				clarifyTimeoutError: boolean;
			};
			url: string;
			method: string;
			adapter: string[];
			timeout: number;
		};
	};
	meta: {
		arg: {
			token: string;
		};
		requestId: string;
		requestStatus: string;
	};
}

// tipagem do dados de groups que estar no estado do react
interface IFilterDataGroupsProps {
	value: string | number;
	label: string;
}

// tipagem do dados dos dados aprovação
interface IDataApprovalProps {
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

// tipagem das paginas que vem da api
interface IDataPagesProps {
	url: string;
	label: string;
	active: boolean;
}

/**
 * EXPORTS
 */
export type {
	IFilterDataProps,
	IFilterRequestProps,
	IFilterDataGroupsProps,
	IDataPagesProps,
	IDataApprovalProps,
};
