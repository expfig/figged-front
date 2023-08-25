import { useState } from "react";
import PropTypes from "prop-types";
import { AsyncPaginate } from "react-select-async-paginate";

// redux
import { useDispatch } from "react-redux";
import { actions as ActionsFilter } from "../../../../features/filter";

// components
import { LoadingTextPagination } from "../loading-text-pagination";

// typings
import {
	type SelectAsyncPaginateProps,
	type IFilterRequestProps,
} from "./interface";

const SelectAsyncPaginate = ({
	value,
	onChange,
	placeholder = "exemple",
	regionName,
	nameTypeRequest,
}: SelectAsyncPaginateProps) => {
	const dispatch = useDispatch();
	const [pages, setPages] = useState(1);

	const loadOptions = async (
		searchQuery: string,
		{ page }: any // PAGINA ATUAL
	) => {
		switch (nameTypeRequest) {
			case "coils":
				if (searchQuery) {
					const responseFilterCoilsNumber: IFilterRequestProps = await dispatch(
						ActionsFilter.filterCoilsNumber({
							page: 1,
							propFilter: searchQuery,
						})
					);
					const responseCoilsFiltered =
						responseFilterCoilsNumber.payload.data.data;

					return {
						options: responseCoilsFiltered,
						hasMore: responseCoilsFiltered.length >= 10,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				} else {
					const responseFilterCoils: IFilterRequestProps = await dispatch(
						ActionsFilter.fetchAllCoils({ page: pages })
					);
					const responseCoils = responseFilterCoils.payload.data.data;

					setPages(pages + 1);
					return {
						options: responseCoils,
						hasMore: responseCoils.length >= 1,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				}
			case "drivers":
				if (searchQuery) {
					const responseFilterDriversName: IFilterRequestProps = await dispatch(
						ActionsFilter.filterDriversName({
							page: 1,
							propFilter: searchQuery,
						})
					);
					const responseNameDrivers =
						responseFilterDriversName.payload.data.data;

					return {
						options: responseNameDrivers,
						hasMore: responseNameDrivers.length >= 10,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				} else {
					const responseFilterGroups: IFilterRequestProps = await dispatch(
						ActionsFilter.fetchAllDrivers({ page: pages })
					);
					const responseMotorista = responseFilterGroups.payload.data.data;

					setPages(pages + 1);

					return {
						options: responseMotorista,
						hasMore: responseMotorista.length >= 1,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				}
			case "plates":
				if (searchQuery) {
					const responseFilterPlatesNumber: IFilterRequestProps =
						await dispatch(
							ActionsFilter.filterPlatesNumber({
								page: 1,
								propFilter: searchQuery,
							})
						);
					const responsePlatesFiltered =
						responseFilterPlatesNumber.payload.data.data;

					return {
						options: responsePlatesFiltered,
						hasMore: responsePlatesFiltered.length >= 10,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				} else {
					const responseFilterPlates: IFilterRequestProps = await dispatch(
						ActionsFilter.fetchAllPlates({ page: pages })
					);
					const responsePlates = responseFilterPlates.payload.data.data;

					setPages(pages + 1);
					return {
						options: responsePlates,
						hasMore: responsePlates.length >= 1,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				}
			case "trip_number":
				if (searchQuery) {
					const responseFilterTripNumber: IFilterRequestProps = await dispatch(
						ActionsFilter.filterTripeNumber({
							page: 1,
							propFilter: searchQuery,
						})
					);
					const resTripNumber = responseFilterTripNumber.payload.data.data;

					setPages(pages + 1);
					return {
						options: resTripNumber,
						hasMore: resTripNumber.length >= 10,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				} else {
					const responseTripNumber: IFilterRequestProps = await dispatch(
						ActionsFilter.fetchAllTripNumber({ page: pages })
					);
					const responseTripNumb = responseTripNumber.payload.data.data;

					setPages(pages + 1);
					return {
						options: responseTripNumb,
						hasMore: responseTripNumb.length >= 1,
						additional: {
							page: searchQuery ? 2 : Number(page) + 1,
						},
					};
				}
		}
	};

	const hanleOnChangeAsync = (option: any) => {
		if (typeof onChange === "function") {
			onChange(option);
		}
	};

	return (
		<div style={{ marginBottom: 12 }}>
			<AsyncPaginate
				key={regionName}
				value={value ?? ""}
				placeholder={placeholder}
				// @ts-expect-error
				loadOptions={loadOptions}
				onChange={hanleOnChangeAsync}
				getOptionValue={(option: any) => String(option?.text)?.trim()} // Resolve dados de opção em uma string para comparar opções e especificar atributos de valor
				getOptionLabel={(option: any) => String(option?.text)?.trim()} // Resolve os dados de opção para uma string a ser exibida como rótulo por componentes
				isSearchable={true} // usuário interagir com o input
				loadingMessage={() => <LoadingTextPagination />}
				additional={{
					page: 1,
				}} // Não requerido. Padrão additional para a primeira solicitação para cada pesquisa.
			/>
		</div>
	);
};

// tipagem do componente
SelectAsyncPaginate.propTypes = {
	regionName: PropTypes.string.isRequired,
	value: PropTypes.object,
	onChange: PropTypes.func,
};

/**
 * EXPORTS
 */
export { SelectAsyncPaginate };
