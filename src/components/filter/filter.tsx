/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

// redux
import { useDispatch, useSelector } from "react-redux";

// react-select
import Select from "react-select";

// Use o componente Async para carregar opções de uma fonte remota enquanto o usuário digita.
import AsyncSelect from "react-select/async";

// actions
import { actions as ActionsFilter } from "../../features/filter";

// selectors
import { selectFilter } from "../../features/filter/selectores";

// components
import { Button } from "../button";
import { Text } from "../text/text";

// data fake
import {
	options,
	colourOptions,
	type ColourOption,
	optionsNameMotorista,
	type DrivernameOption,
} from "./data-fake";

// typings
import { type FilterDataProps } from "./interface";

// styles
import {
	ContainerFiltered,
	WrapperSelect,
	WrapperTitle,
	FooterBottom,
} from "./styles";

const Filter = () => {
	const theme = useTheme();
	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	// use dispatch
	const dispatch = useDispatch();

	// use selector
	const selectedWork = useSelector(selectFilter);

	const [groups, setGroups] = useState<FilterDataProps[]>([]);

	const handleFilter = useCallback(async () => {
		const responseFilter = await dispatch(
			ActionsFilter.fetchAllgroups({ token })
		);

		return responseFilter;
	}, []);

	const filterColors = (inputValue: string) => {
		return colourOptions.filter(i =>
			i.label.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	const filterDriveName = (inputValue: string) => {
		return optionsNameMotorista.filter(driveName =>
			driveName.label.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	const loadOptions = (
		inputValue: string,
		callback: (options: ColourOption[]) => void
	) => {
		setTimeout(() => {
			callback(filterColors(inputValue));
		}, 1000);
	};

	const loadOptionsDriveName = (
		inputValue: string,
		callback: (options: DrivernameOption[]) => void
	) => {
		setTimeout(() => {
			callback(filterDriveName(inputValue));
		}, 1000);
	};

	const handleTransformeData = () => {
		const novo = selectedWork.map((data: FilterDataProps) => {
			return {
				value: data.id,
				label: data.text,
			};
		});

		setGroups(novo);
	};

	useEffect(() => {
		handleTransformeData();
	}, []);

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
					options={options}
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
					options={options}
					onChange={text => {}}
				/>

				{/** * SELECT BOBINAS */}
				<AsyncSelect
					placeholder={"Digite o número da bobina"}
					cacheOptions
					loadOptions={loadOptions}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
							marginBottom: 12,
						}),
					}}
				/>

				{/** * SELECT MOTORISTA */}
				<AsyncSelect
					placeholder={"Selecione o nome do motorista(a)"}
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
						onClick={handleFilter}
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
