/**
 * IMPORTS
 */

import { type Dispatch } from "redux";
import { type IDocumentsApprovedProps } from "../../aprovation-listing/interface";

interface IFunctionDocumentsProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: (value: Dispatch<any>) => any;
	token: string;
	status: string;
	setDataPeddingDocuments: React.Dispatch<
		React.SetStateAction<IDocumentsApprovedProps[]>
	>;
}

/***
 * EXPORTS
 */

export type { IFunctionDocumentsProps };
