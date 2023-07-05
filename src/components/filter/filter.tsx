/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */
import { useState } from "react";

import { useTheme } from "styled-components";

// react-select
import Select from "react-select";

// components
import { Button } from "../button";
import { Text } from "../text/text";
import { SelectAsyncPaginate } from "./components/async-paginate/async-paginate";

// typings
import { type FilterProps } from "./interface";

// styles
import {
	ContainerFiltered,
	WrapperSelect,
	WrapperTitle,
	FooterBottom,
} from "./styles";

const Filter = ({
	groups,
	types,
	status,
	// functions
	onChangeTextGroup,
	onChangeTextType,
	onChangeTextStatus,
	onChangeTextNameDriver,
	onChangeTextPlateId,
	onClickButtonFilter,
	onClickCleanFilter,
}: FilterProps) => {
	const theme = useTheme();

	const [coils, setCoils] = useState(null);
	const [nameDriver, setNameDriver] = useState(null);
	const [plates, setPlates] = useState(null);
	const [tripNumber, setTripNumber] = useState(null);

	const handleOnchangeSelectCoils = (item: any) => {
		setCoils(item);
	};

	const handleOnchangeSelectDrivers = (item: any) => {
		onChangeTextNameDriver(item);
		setNameDriver(item);
	};

	const handleOnchangeSelectPlates = (item: any) => {
		onChangeTextPlateId(item);
		setPlates(item);
	};

	const handleOnchangeTripNumber = (item: any) => {
		setTripNumber(item);
	};
	return (
		<ContainerFiltered>
			<WrapperTitle>
				<Text
					marginTop={8}
					text="Filtrar Resultados"
					align="left"
					letterHeight={36}
					color={theme.colors.black_200}
					size={24}
					marginLeft={16}
					weight="600"
				/>
			</WrapperTitle>
			<WrapperSelect>
				{/** * SELECT GRUPO */}

				<Select
					placeholder={"Selecione o Grupo"}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
					options={groups}
					onChange={onChangeTextGroup}
				/>

				{/** * SELECT TIPO */}
				<Select
					placeholder={"Selecione o Tipo"}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
					options={types}
					onChange={onChangeTextType}
				/>

				{/** * SELECT TIPO */}
				<Select
					placeholder={"Selecione o Staus"}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
					options={status}
					onChange={onChangeTextStatus}
				/>

				{/** * SELECT BOBINAS */}
				<SelectAsyncPaginate
					regionName=""
					nameTypeRequest="coils"
					placeholder="Selecione o número da bobina"
					onChange={handleOnchangeSelectCoils}
					value={coils}
				/>

				{/** * SELECT MOTORISTA */}
				<SelectAsyncPaginate
					regionName=""
					nameTypeRequest="drivers"
					placeholder={"Selecione o nome do motorista(a)"}
					onChange={handleOnchangeSelectDrivers}
					value={nameDriver}
				/>

				{/** * SELECT PLACA DO VEÍCULO */}
				<SelectAsyncPaginate
					regionName=""
					nameTypeRequest="plates"
					placeholder={"Selecione uma placa"}
					onChange={handleOnchangeSelectPlates}
					value={plates}
				/>

				{/** * SELECT PLACA DO NÚMERO DA VIAGEM */}
				<SelectAsyncPaginate
					regionName=""
					nameTypeRequest="trip_number"
					placeholder={"Selecione número da viagem"}
					onChange={handleOnchangeTripNumber}
					value={tripNumber}
				/>
				<FooterBottom>
					<Button
						onClick={onClickCleanFilter}
						title="Limpar"
						backgroundColor={theme.colors.red_300}
						loading={false}
					/>

					<Button
						onClick={onClickButtonFilter}
						title="Realizar Filtro"
						backgroundColor={theme.colors.blue_100}
						color={theme.colors.natural}
						loading={false}
					/>
				</FooterBottom>
			</WrapperSelect>
		</ContainerFiltered>
	);
};

/**
 * EXPORTS
 */
export { Filter };
