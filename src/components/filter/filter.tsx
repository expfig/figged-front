/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */
import { useState } from "react";

import { useTheme } from "styled-components";

// react-select
import Select from "react-select";

// Use o componente Async para carregar opções de uma fonte remota enquanto o usuário digita.
import AsyncSelect from "react-select/async";

// components
import { Button } from "../button";
import { Text } from "../text/text";
import { SelectAsyncPaginate } from "./components/async-paginate/async-paginate";

// data fake
import { optionsNameMotorista, type DrivernameOption } from "./data-fake";

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

	const [currentCountry, setCurrentCountry] = useState(null);
	const [nameDriver, setNameDriver] = useState(null);

	const filterDriveName = (inputValue: string) => {
		return optionsNameMotorista.filter(driveName =>
			driveName.label.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	const loadOptionsDriveName = (
		inputValue: string,
		callback: (options: DrivernameOption[]) => void
	) => {
		setTimeout(() => {
			callback(filterDriveName(inputValue));
		}, 1000);
	};

	const onchangeSelect = (item: any) => {
		setCurrentCountry(item);
	};

	const onchangeSelectDrivers = (item: any) => {
		setNameDriver(item);
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
					onChange={onchangeSelect}
					value={currentCountry}
				/>

				{/** * SELECT MOTORISTA */}
				<SelectAsyncPaginate
					regionName=""
					nameTypeRequest="drivers"
					placeholder={"Selecione o nome do motorista(a)"}
					onChange={onchangeSelectDrivers}
					value={nameDriver}
				/>

				{/** * SELECT PLACA DO VEÍCULO */}
				<AsyncSelect
					placeholder={"Digite a placa do veículo"}
					cacheOptions
					loadOptions={loadOptionsDriveName}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
				/>

				{/** * SELECT PLACA DO NÚMERO DA VIAGEM */}
				<AsyncSelect
					placeholder={"Digite número da viagem"}
					cacheOptions
					loadOptions={loadOptionsDriveName}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
						}),
					}}
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
