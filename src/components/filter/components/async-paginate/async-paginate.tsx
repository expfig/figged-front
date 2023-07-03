/* eslint-disable no-case-declarations */
import { useState } from "react";
import PropTypes from "prop-types";
import { FiLoader } from "react-icons/fi";
import { AsyncPaginate } from "react-select-async-paginate";

// redux
import { useDispatch } from "react-redux";
import { actions as ActionsFilter } from "../../../../features/filter";

// components
import { Text } from "../../../text";

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
		searchQuery: any,
		{ page }: any // PAGINA ATUAL
	) => {
		const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

		switch (nameTypeRequest) {
			case "coils":
				const responseFilterCoils: IFilterRequestProps = await dispatch(
					ActionsFilter.fetchAllCoils({ token, page: pages })
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

			case "drivers":
				const responseFilterGroups: IFilterRequestProps = await dispatch(
					ActionsFilter.fetchAllDrivers({ token, page: pages })
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

			case "plates":
				const responseFilterPlates: IFilterRequestProps = await dispatch(
					ActionsFilter.fetchAllPlates({ token, page: pages })
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

			case "trip_number":
				const responseFilterTripNumber: IFilterRequestProps = await dispatch(
					ActionsFilter.fetchAllPlates({ token, page: pages })
				);

				setPages(pages + 1);
				return {
					options: [],
					hasMore: [].length >= 1,
					additional: {
						page: searchQuery ? 2 : Number(page) + 1,
					},
					response: responseFilterTripNumber.payload.data.data,
				};
		}
	};

	const onChangeAsync = (option: any) => {
		if (typeof onChange === "function") {
			onChange(option);
		}
	};

	const ComponetTextProps = () => {
		return (
			<>
				<FiLoader size={34} color={"#0d6efd"} />
				<Text
					marginTop={18}
					text="Carregando..."
					align="center"
					letterHeight={24}
					letterSpacing={0.5}
					color={"#7a7171"}
					size={16}
					weight="400"
				/>
			</>
		);
	};

	return (
		<div style={{ marginBottom: 12 }}>
			<AsyncPaginate
				key={regionName}
				value={value ?? ""}
				placeholder={placeholder}
				// @ts-expect-error
				loadOptions={loadOptions}
				onChange={onChangeAsync}
				getOptionValue={(option: any) => option.text} // Resolve dados de opção em uma string para comparar opções e especificar atributos de valor
				getOptionLabel={(option: any) => option.text} // Resolve os dados de opção para uma string a ser exibida como rótulo por componentes
				isSearchable={false} // usuário interagir com o input
				loadingMessage={ComponetTextProps}
				additional={{
					page: 1,
				}} // Não requerido. Padrão additionalpara a primeira solicitação para cada pesquisa.
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
