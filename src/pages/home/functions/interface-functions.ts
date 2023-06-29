/**
 * IMPORTS
 */

import { type Dispatch } from "react";
import { type FilterDataGroupsProps } from "../interface";

// tipagem para a função que busca todos os dados
interface FetchingAllDataForFilteringProps {
	setLoading: (value: boolean) => void;
	token: string;
	dispatch: (value: Dispatch<any>) => any;
	setGroups: (value: FilterDataGroupsProps[]) => void;
	setTypes: (value: FilterDataGroupsProps[]) => void;
	setStatus: (value: FilterDataGroupsProps[]) => void;
}

/**
 * EXPORTS
 */
export type { FetchingAllDataForFilteringProps };
