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
		data: Array<{
			id: string | number;
			text: string;
		}>;
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

interface FilterProps {
	groups: FilterDataGroupsProps[];
	types: FilterDataGroupsProps[];
	status: FilterDataGroupsProps[];

	// functions
	onChangeTextGroup: (value: any) => void;
	onChangeTextType: (value: any) => void;
	onChangeTextStatus: (value: any) => void;
	onChangeTextNameDriver: (value: any) => void;
	onChangeTextPlateId: (value: any) => void;

	onClickButtonFilter: () => void;
	onClickCleanFilter: () => void;
}

/**
 * EXPORTS
 */
export type {
	FilterDataProps,
	IFilterRequestProps,
	FilterDataGroupsProps,
	FilterProps,
};
