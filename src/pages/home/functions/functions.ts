/**
 * IMPORTS
 */

// redux
import { actions as ActionsFilter } from "../../../features/filter";

// typings
import { type FetchingAllDataForFilteringProps } from "./interface-functions";
import {
	type IFilterDataProps,
	type IFilterRequestProps,
	type IFilterDataGroupsProps,
} from "../interface";

const fetchingAllDataForFiltering = async ({
	setLoading,
	dispatch,
	setGroups,
	setTypes,
	setStatus,
}: FetchingAllDataForFilteringProps) => {
	try {
		setLoading(true);

		// action que busca todos os grupos disponiveis
		const responseFilterGroups: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllgroups()
		);

		// action que busca todos os tipos(comprovante, bobina) disponiveis
		const responseFilterTypes: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllTypes()
		);

		// action que busca todos os status(aprovado, aguardando,novo, pendente) disponiveis
		const responseFilterStatus: IFilterRequestProps = dispatch(
			ActionsFilter.fetchAllStatus()
		);

		// tratando todas a promessas
		const [filterGroups, filterTypes, filterStatus] = await Promise.all([
			responseFilterGroups,
			responseFilterTypes,
			responseFilterStatus,
		]);

		// a action (grupos) retornou dados da api, agora iremos montar nossos dados da forma que necessitamos
		const responseGroups: IFilterDataGroupsProps[] = [];
		if (filterGroups.payload.data.data.length > 0) {
			const newData = filterGroups.payload.data?.data.map(
				(data: IFilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);

			responseGroups.push(...newData);
		}
		setGroups(responseGroups);

		const responseTypes: IFilterDataGroupsProps[] = [];

		// a action (tipos) retornou dados da api, agora iremos montar nossos dados da forma que necessitamos
		if (filterTypes.payload.data.data.length > 0) {
			const newData = filterTypes.payload.data?.data.map(
				(data: IFilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);
			responseTypes.push(...newData);
		}
		setTypes(responseTypes);

		// a action (status) retornou dados da api, agora iremos montar nossos dados da forma que necessitamos
		const responseStatus: IFilterDataGroupsProps[] = [];
		if (filterStatus.payload.data.data.length > 0) {
			const newDataStatus = filterStatus.payload.data?.data.map(
				(data: IFilterDataProps) => {
					return {
						value: data?.id,
						label: data?.text,
					};
				}
			);

			responseStatus.push(...newDataStatus);
		}
		setStatus(responseStatus);

		return responseFilterGroups;
	} catch (error) {
		return error;
	} finally {
		setLoading(false);
	}
};
/**
 * EXPORTS
 */
export { fetchingAllDataForFiltering };
