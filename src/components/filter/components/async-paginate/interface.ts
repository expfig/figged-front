/***
 * IMPORTS
 */

interface SelectAsyncPaginateProps {
	regionName?: string;
	onChange: (text: string) => void;
	value: string | null;
	nameTypeRequest: string;
	placeholder?: string;
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

/**
 * EXPORTS
 */
export type { SelectAsyncPaginateProps, IFilterRequestProps };
