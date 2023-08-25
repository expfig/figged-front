/**
 * IMPORTS
 */

export interface IDataAPI {
	id: string | number;
	text: string;
	cpf?: string;
}

// tipagem da request do redux
interface IReduxRequestProps {
	type: string;
	payload: {
		data: {
			data: {
				links: [];
				last_page: number;
				data: any;
			};
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

/**
 * EXPORTS
 */
export type { IReduxRequestProps };
