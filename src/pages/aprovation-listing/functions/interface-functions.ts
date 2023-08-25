/**
 * IMPORTS
 */

import { type Dispatch } from "redux";
import { type IDocumentsApprovedProps } from "../interface";

interface IFunctionDocumentsProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: (value: Dispatch<any>) => any;
	page: number;
	status: string;
	setDataPages: React.Dispatch<React.SetStateAction<any[]>>;
	setDataApprovalDocuments: React.Dispatch<
		React.SetStateAction<IDocumentsApprovedProps[]>
	>;
	setLastpage: React.Dispatch<React.SetStateAction<number>>;
}

/***
 * EXPORTS
 */

export type { IFunctionDocumentsProps };
