/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

// redux
import { useDispatch } from "react-redux";

// components
import { Table } from "../../components/table";
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { Filter } from "../../components/filter";

// typings
import { type FilterDataGroupsProps } from "./interface";

// functions
import { fetchingAllDataForFiltering } from "./functions/functions";

// styles
import {
	ContainerMain,
	ContainerFiltered,
	WrapperTable,
	WrapperTitle,
} from "./styles";

const Home = () => {
	const theme = useTheme();

	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	// use dispatch
	const dispatch = useDispatch();

	const [groups, setGroups] = useState<FilterDataGroupsProps[]>([]);
	const [types, setTypes] = useState<FilterDataGroupsProps[]>([]);
	const [loading, setLoading] = useState(false);

	const handleFilter = useCallback(async () => {
		fetchingAllDataForFiltering({
			setLoading,
			dispatch,
			setGroups,
			setTypes,
			token,
		});
	}, []);

	useEffect(() => {
		handleFilter();
	}, []);
	return (
		<>
			{loading ? (
				<Loading color={theme.colors.blue_100} size={34} />
			) : (
				<ContainerMain>
					<WrapperTitle>
						<Text
							marginTop={18}
							text="Lista de Documentos:"
							align="left"
							letterHeight={24}
							letterSpacing={0.5}
							color={theme.colors.black_200}
							size={24}
							weight="600"
							marginBottom={30}
						/>
					</WrapperTitle>

					{/** COMPONENTE DE FILTRO */}
					<ContainerFiltered>
						<Filter types={types} groups={groups} />
					</ContainerFiltered>

					{/** COMPONENTE DE TABELA */}
					<WrapperTable>
						<Table />
					</WrapperTable>
				</ContainerMain>
			)}
		</>
	);
};

/**
 * EXPORTS
 */
export { Home };
