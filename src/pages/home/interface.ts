/**
 * IMPORTS
 */
// tipagem dados vindo da api
interface FilterDataProps {
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
interface FilterDataGroupsProps {
	value: string | number;
	label: string;
}

/**
 * EXPORTS
 */
export type { FilterDataProps, IFilterRequestProps, FilterDataGroupsProps };
