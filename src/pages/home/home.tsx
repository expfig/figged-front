/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { toast } from "react-toastify";

// redux
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";

import { actions as ActionsApproval } from "../../features/approval";

// components
import { Table } from "../../components/table";
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { Filter } from "../../components/filter";

// typings
import {
	type IDataPagesProps,
	type IFilterDataGroupsProps,
	type IDataApprovalProps,
} from "./interface";

// functions
import { fetchingAllDataForFiltering } from "./functions/functions";
import { handleScrollTop } from "./functions/function-scrooll";

// styles
import {
	ContainerMain,
	ContainerFiltered,
	WrapperTable,
	WrapperTitle,
} from "./styles";

const Home = () => {
	const theme = useTheme();

	// use dispatch
	const dispatch = useAppDispatch();

	const [groups, setGroups] = useState<IFilterDataGroupsProps[]>([]);
	const [types, setTypes] = useState<IFilterDataGroupsProps[]>([]);
	const [status, setStatus] = useState<IFilterDataGroupsProps[]>([]);

	const [approvalData, setApprovalData] = useState<IDataApprovalProps[]>([]);
	const [pagesData, setPagesData] = useState<IDataPagesProps[]>([]);

	const [countPage, setCountPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [loading, setLoading] = useState(false);

	// estados para o filtro
	const [groupFilter, setGroupFilter] = useState(null);
	const [statusFilter, setStatusFilter] = useState(null);
	const [typeFilter, setTypeFilter] = useState(null);
	const [driverIdFilter, setDriveIdFilter] = useState(null);
	const [platesIdFilter, setPlatesIdFilter] = useState(null);
	const [coilNumber, setCoillNumber] = useState(null);
	const [tripNumber, setTripNumber] = useState(null);

	// buscando dados para colocar no componente filtro
	const handleFetchDataForTheFilter = useCallback(async () => {
		await fetchingAllDataForFiltering({
			setLoading,
			dispatch,
			setGroups,
			setTypes,
			setStatus,
		});
	}, []);

	// buscando dados das aprovações para usuário realizar (aprovação ou reprovação) de documentos
	const handleFetchDataApprovals = useCallback(async () => {
		try {
			setLoading(true);
			const response = await dispatch(
				ActionsApproval.fetchAllApprovals({
					page: countPage ?? null,
					groupId: groupFilter ?? null,
					tipo: typeFilter ?? null,
					status: statusFilter ?? null,
					coilNumber: coilNumber ?? null,
					driverId: driverIdFilter ?? null,
					truckId: platesIdFilter ?? null,
					tripNumber: tripNumber ?? null,
				})
			);

			setApprovalData(response?.payload?.data?.data?.data);

			const responseFiltered = response?.payload?.data?.data?.links?.filter(
				(link: IDataPagesProps) =>
					link.label !== "&laquo; Anterior" &&
					link.label !== "..." &&
					link.label !== "Próxima &raquo;"
			);

			setLastPage(response.payload.data.data.last_page);
			setPagesData(responseFiltered);

			handleCleanDataFilter();

			toast.success("Busca realizada com sucesso!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
			});
		} catch (error) {
			toast.error("Ops, algo deu errado entre contato com suporte!", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
			});
			return error;
		} finally {
			setLoading(false);
		}
	}, [
		countPage,
		groupFilter,
		typeFilter,
		statusFilter,
		driverIdFilter,
		platesIdFilter,
		coilNumber,
		tripNumber,
	]);

	// selecionando o elemento pelo id
	const btn = document.querySelector("#back-to-top");

	// limpando o  estado dos dados do filtro realizado
	const handleCleanDataFilter = () => {
		setLoading(true);
		setGroupFilter(null);
		setTypeFilter(null);
		setStatusFilter(null);
		setPlatesIdFilter(null);
		setDriveIdFilter(null);
		setCoillNumber(null);
		setTripNumber(null);
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
		<div id="back-to-top">
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
							onChangeTextCoillNumber={(option: any) => {
								setCoillNumber(option?.text);
							}}
							onChangeTextTripNumber={(option: any) => {
								setTripNumber(option?.text);
							}}
							onClickButtonFilter={() => {
								setCountPage(1);
								handleFetchDataApprovals();
								handleScrollTop(btn);
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
							firstPage={countPage}
							lastPage={lastPage}
							isLoading={loading}
							onClickNext={(pageCount: number) => {
								handleOnclickPageNextOrPreview("next", Number(pageCount));
								handleScrollTop(btn);
								return pageCount;
							}}
							onClickPreview={(pageCount: number) => {
								handleOnclickPageNextOrPreview("preview", Number(pageCount));
								handleScrollTop(btn);
								return pageCount;
							}}
						/>
					</WrapperTable>
				</ContainerMain>
			)}
		</div>
	);
};

/**
 * EXPORTS
 */
export { Home };
