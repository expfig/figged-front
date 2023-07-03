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

const Filter = ({ groups, types, status }: FilterProps) => {
	const theme = useTheme();

	const [coils, setCoils] = useState<string>("");
	const [nameDriver, setNameDriver] = useState<string>("");
	const [plates, setPlates] = useState<string>("");
	const [tripNumber, setTripNumber] = useState<string>("");

	const handleOnchangeSelectCoils = (item: string) => {
		setCoils(item);
	};

	const handleOnchangeSelectDrivers = (item: string) => {
		setNameDriver(item);
	};

	const handleOnchangeSelectPlates = (item: string) => {
		setPlates(item);
	};

	const handleOnchangeTripNumber = (item: string) => {
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
					onChange={text => {}}
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
					onChange={text => {}}
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
					onChange={text => {}}
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
						title="Limpar"
						backgroundColor={theme.colors.red_300}
						loading={false}
					/>

					<Button
						onClick={() => {}}
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
