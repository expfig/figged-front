/**
 * IMPORTS
 */

import { type Dispatch } from "redux";
import { type IDocumentsApprovedProps } from "../../aprovation-listing/interface";
interface IFunctionDataPagesProps {
	url: string;
	label: string;
	active: boolean;
}

interface IFunctionDocumentsProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: (value: Dispatch<any>) => any;
	token: string;
	countPage: number;
	status: string;
	setDataPeddingDocuments: React.Dispatch<
		React.SetStateAction<IDocumentsApprovedProps[]>
	>;
	setPagesData: React.Dispatch<React.SetStateAction<IFunctionDataPagesProps[]>>;
	setLastPage: React.Dispatch<React.SetStateAction<number>>;
}

/***
 * EXPORTS
 */

export type { IFunctionDocumentsProps, IFunctionDataPagesProps };
