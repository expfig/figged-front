/**
 * IMPORTS
 */

import { type Dispatch } from "redux";

// typings
import {
	type IDocumentDataResponse,
	type IDataTable,
	type IDataPagesProps,
} from "../interface";

interface IFunctionAprovationProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: (value: Dispatch<any>) => any;
	token: string;
	idAprovacao: number | string;
	countPage: number;
	idDriveName: number | string;
	setDocuments: React.Dispatch<React.SetStateAction<IDocumentDataResponse>>;
	setDataTable: React.Dispatch<React.SetStateAction<IDataTable[]>>;
	setPagesData: React.Dispatch<React.SetStateAction<IDataPagesProps[]>>;
}

/**
 * EXPORTS
 */
export type { IFunctionAprovationProps, IDataPagesProps };
