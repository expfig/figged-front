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

interface IDocumentApprovalOneProps {
	idImage: string;
	token: string;
	dispatch: (value: Dispatch<any>) => any;
	setLoadingAprovationOrReproach: React.Dispatch<React.SetStateAction<boolean>>;
	setIsOpenModalAprotion: React.Dispatch<React.SetStateAction<boolean>>;
	setImageID: React.Dispatch<React.SetStateAction<number | null>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	handleGetCurrentData: () => void;
	handlePendingApprovalSeeking: () => Promise<void>;
}

interface IDocumentReproachOneProps {
	setLoadingAprovationOrReproach: React.Dispatch<React.SetStateAction<boolean>>;
	setIsModalReproach: React.Dispatch<React.SetStateAction<boolean>>;
	setImageID: React.Dispatch<React.SetStateAction<number | null>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	token: string;
	dispatch: (value: Dispatch<any>) => any;
	handleGetCurrentData: () => void;
	idImage: string;
	messageApproval: string;
	handlePendingApprovalSeeking: () => Promise<void>;
}

/***
 * EXPORTS
 */

export type {
	IFunctionDocumentsProps,
	IFunctionDataPagesProps,
	IDocumentApprovalOneProps,
	IDocumentReproachOneProps,
};
