/* eslint-disable @typescript-eslint/restrict-plus-operands */
/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { toast } from "react-toastify";

// redux
import { useDispatch } from "react-redux";

import { actions as ActionsApproval } from "../../features/approval";

// components
import { Table } from "../../components/table";
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { Filter } from "../../components/filter";

// typings
import { type IDataPagesProps, type FilterDataGroupsProps } from "./interface";

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
	const [status, setStatus] = useState<FilterDataGroupsProps[]>([]);

	const [approvalData, setApprovalData] = useState([]);
	const [pagesData, setPagesData] = useState([]);
	const [countPage, setCountPage] = useState(1);
	const [loading, setLoading] = useState(false);

	// dados para o filtro
	const [groupFilter, setGroupFilter] = useState(null);
	const [statusFilter, setStatusFilter] = useState(null);
	const [typeFilter, setTypeFilter] = useState(null);
	const [driverIdFilter, setDriveIdFilter] = useState(null);
	const [platesIdFilter, setPlatesIdFilter] = useState(null);

	const handleFetchDataForTheFilter = useCallback(async () => {
		fetchingAllDataForFiltering({
			setLoading,
			token,
			dispatch,
			setGroups,
			setTypes,
			setStatus,
		});
	}, []);

	const handleFetchDataApprovals = useCallback(async () => {
		try {
			setLoading(true);
			const response = await dispatch(
				ActionsApproval.fetchAllApprovals({
					token,
					page: countPage,
					groupId: groupFilter,
					tipo: typeFilter,
					status: statusFilter,
					coilNumber: null,
					driverId: driverIdFilter,
					truckId: platesIdFilter,
				})
			);

			setApprovalData(response?.payload?.data?.data?.data);

			const responseFiltered = response?.payload?.data?.data?.links.filter(
				(link: IDataPagesProps) =>
					link.label !== "&laquo; Anterior" &&
					link.label !== "..." &&
					link.label !== "Próxima &raquo;"
			);

			setPagesData(responseFiltered);
			setLoading(false);
			toast.success("Busca realizada com sucesso!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
			});
		} catch (error) {
			toast.success("Ops, algo deu errado entre contato com suporte!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
			});
			return error;
		}
	}, [
		countPage,
		groupFilter,
		typeFilter,
		statusFilter,
		driverIdFilter,
		platesIdFilter,
	]);

	const handleCleanDataFilter = () => {
		setLoading(true);
		setGroupFilter(null);
		setTypeFilter(null);
		setStatusFilter(null);
		setDriveIdFilter(null);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	// função levar usuário pra poxima paganina ou para a anterior
	const handleOnclickPageNextOrPreview = useCallback(
		(netxOrPreview: string, pageNumber: any) => {
			if (netxOrPreview === "next") {
				if (pageNumber) {
					setCountPage(pageNumber);
				} else {
					setCountPage(countPage + 1);
				}
			} else {
				if (pageNumber) {
					setCountPage(pageNumber);
				} else {
					setCountPage(countPage - 1);
				}
			}
		},
		[countPage]
	);

	useEffect(() => {
		handleFetchDataForTheFilter();
		handleFetchDataApprovals();
	}, [countPage]);
	return (
		<>
			{loading ? (
				<Loading color={theme.colors.blue_100} size={34} />
			) : (
				<ContainerMain>
					<WrapperTitle>
						<Text
							marginTop={18}
							text="Documentos:"
							align="left"
							letterHeight={24}
							letterSpacing={0.5}
							color={theme.colors.black_100}
							size={24}
							weight="600"
							marginBottom={30}
						/>
					</WrapperTitle>

					{/** COMPONENTE DE FILTRO */}
					<ContainerFiltered>
						<Filter
							groups={groups}
							onChangeTextGroup={(option: any) => {
								setGroupFilter(option?.value);
							}}
							status={status}
							onChangeTextStatus={text => {
								setStatusFilter(text?.label);
							}}
							types={types}
							onChangeTextType={(option: any) => {
								setTypeFilter(option?.value);
							}}
							onChangeTextNameDriver={(option: any) => {
								setDriveIdFilter(option?.id);
							}}
							onChangeTextPlateId={(option: any) => {
								setPlatesIdFilter(option.id);
							}}
							onClickButtonFilter={() => {
								handleFetchDataApprovals();
							}}
							onClickCleanFilter={() => {
								handleCleanDataFilter();
							}}
						/>
					</ContainerFiltered>

					{/** COMPONENTE DE TABELA */}
					<WrapperTable>
						<Table
							data={approvalData}
							pages={pagesData}
							onClickNext={(pageCount: any) => {
								handleOnclickPageNextOrPreview("next", Number(pageCount));
							}}
							onClickPreview={(pageCount: any) => {
								handleOnclickPageNextOrPreview("preview", Number(pageCount));
							}}
						/>
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
