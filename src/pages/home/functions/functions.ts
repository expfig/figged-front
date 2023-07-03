/**
 * IMPORTS
 */

// redux
import { actions as ActionsFilter } from "../../../features/filter";

// typings
import { type FetchingAllDataForFilteringProps } from "./interface-functions";
import {
	type FilterDataProps,
	type IFilterRequestProps,
	type FilterDataGroupsProps,
} from "../interface";

const fetchingAllDataForFiltering = async ({
	setLoading,
	token,
	dispatch,
	setGroups,
	setTypes,
	setStatus,
}: FetchingAllDataForFilteringProps) => {
	try {
		setLoading(true);

		// action que busca todos os grupos disponiveis
		const responseFilterGroups: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllgroups({ token })
		);
		// action que busca todos os tipos(comprovante, bobina) disponiveis
		const responseFilterTypes: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllTypes({ token })
		);

		// action que busca todos os status(aprovado, aguardando,novo, pendente  ) disponiveis
		const responseFilterStatus: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllStatus({ token })
		);

		// tratando todas a promessas
		const [filterGroups, filterTypes, filterStatus] = await Promise.all([
			responseFilterGroups,
			responseFilterTypes,
			responseFilterStatus,
		]);

		// as actions (grupos) retornou dados da api iremos montar nossos dados da forma que necessitamos
		const responseGroups: FilterDataGroupsProps[] = [];
		if (filterGroups.payload.data.data.length > 0) {
			const newData = filterGroups.payload.data?.data.map(
				(data: FilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);

			responseGroups.push(...newData);
		}
		setGroups(responseGroups);

		const responseTypes: FilterDataGroupsProps[] = [];

		// as actions (tipos) retornou dados da api iremos montar nossos dados da forma que necessitamos
		if (filterTypes.payload.data.data.length > 0) {
			const newData = filterTypes.payload.data?.data.map(
				(data: FilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);
			responseTypes.push(...newData);
		}
		setTypes(responseTypes);

		// as actions (status) retornou dados da api iremos montar nossos dados da forma que necessitamos
		const responseStatus: FilterDataGroupsProps[] = [];
		if (filterStatus.payload.data.data.length > 0) {
			const newDataStatus = filterStatus.payload.data?.data.map(
				(data: FilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);

			responseStatus.push(...newDataStatus);
		}
		setStatus(responseStatus);

		setLoading(false);
		return responseFilterGroups;
	} catch (error) {
		return error;
	}
};
/**
 * EXPORTS
 */
export { fetchingAllDataForFiltering };
