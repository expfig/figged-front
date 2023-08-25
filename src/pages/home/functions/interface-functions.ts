/**
 * IMPORTS
 */

import { type Dispatch } from "react";
import { type IFilterDataGroupsProps } from "../interface";

// tipagem para a função que busca todos os dados
interface FetchingAllDataForFilteringProps {
	setLoading: (value: boolean) => void;
	dispatch: (value: Dispatch<any>) => any;
	setGroups: (value: IFilterDataGroupsProps[]) => void;
	setTypes: (value: IFilterDataGroupsProps[]) => void;
	setStatus: (value: IFilterDataGroupsProps[]) => void;
}

/**
 * EXPORTS
 */
export type { FetchingAllDataForFilteringProps };
