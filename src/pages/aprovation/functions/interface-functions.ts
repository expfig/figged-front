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

interface IDocomentApprovalOneProps {
	setLoadingAprovation: React.Dispatch<React.SetStateAction<boolean>>;
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
	setImageID: React.Dispatch<React.SetStateAction<number | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	token: string;
	dispatch: (value: Dispatch<any>) => any;
	handleGetCurrentData: () => void;
	idImage: string;
	onHandleGetAllDocuments: () => Promise<any>;
}

interface IDocomentReproachOneProps {
	setLoadingAprovation: React.Dispatch<React.SetStateAction<boolean>>;
	setIsModalReproach: React.Dispatch<React.SetStateAction<boolean>>;
	setImageID: React.Dispatch<React.SetStateAction<number | null>>;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	token: string;
	dispatch: (value: Dispatch<any>) => any;
	handleGetCurrentData: () => void;
	idImage: string;
	messageApproval: string;
	onHandleGetAllDocuments: () => Promise<any>;
}

/**
 * EXPORTS
 */
export type {
	IFunctionAprovationProps,
	IDataPagesProps,
	IDocomentApprovalOneProps,
	IDocomentReproachOneProps,
};
