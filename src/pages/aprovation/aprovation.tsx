/* eslint-disable @typescript-eslint/no-misused-promises */
/**
 * IMPORTS
 */

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

// axios
import { useDispatch } from "react-redux";
import { actions as ActionsDocument } from "../../features/document";
// components
import { ImageCustom } from "../../components/image";
import { Text } from "../../components/text";
import { Table } from "../../components/table";
import { Loading } from "../../components/loading";

// screen-specific-component
import { ModalAprovation } from "./components/modal-aprovation/modal-aprovation";
import { ModalCancelAprovation } from "./components/modal-cancel-aprovation";

// typings
import {
	type IDataPagesProps,
	type IDocumentDataResponse,
	type IDataTable,
} from "./interface";

// functions
import { handleGetAllDocuments } from "./functions/functions-aprovation";
import { handleReturnText } from "./functions/functions-handle-return-text";
import { handleOnClickPagination } from "./functions/functions-handle-on-click-pagination";
import { handleGetCurrentData } from "../../utils/get-current-data";

// styles
import {
	ContainerMain,
	WrapperImage,
	WrapperTitle,
	WrapperImageNotFoundData,
	ImageNotFoundData,
} from "./styles";

const Aprovation = () => {
	const theme = useTheme();
	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const { idAprovacao, idDriveName } = useParams();

	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const [loadingAprovation, setLoadingAprovation] = useState(false);

	const [isModal, setIsModal] = useState(false);
	const [isModalReproach, setIsModalReproach] = useState(false);

	const [documents, setDocuments] = useState<IDocumentDataResponse>({
		code: 0,
		data: [],
		aprovacao: {} as any,
	});

	const [dataTable, setDataTable] = useState<IDataTable[]>([]);
	const [pagesData, setPagesData] = useState<IDataPagesProps[]>([]);

	const [countPage, setCountPage] = useState(1);
	const [idImage, setImageID] = useState<any>();

	// função que vai aprovar e reprovar uma bobina ou um comprovante
	const handleAprovarionDocumentOrCoil = async () => {
		try {
			setLoadingAprovation(true);
			const patchData = {
				status: "aprovado",
				status_reprovado_mensagem: null,
				sec_users_id: "sgt",
				data_atualizacao_usuario: handleGetCurrentData(),
			};

			const responseApprovedDocument = await dispatch(
				ActionsDocument.patchOneDocument({
					token,
					idDocument: idImage,
					dataOdUpdate: patchData,
				})
			);

			if (responseApprovedDocument.payload.data) {
				toast.success("Documento aprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				setIsModal(false);
				setImageID(null);
				setLoading(false);

				await onHandleGetAllDocuments();
				setLoadingAprovation(false);
			}
		} catch (error) {
			toast.success("Documento não foi aprovado.", {
				position: "top-right",
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return error;
		}
	};

	// função que busca o document de um morista especifico
	const onHandleGetAllDocuments = async () => {
		if (idAprovacao && idDriveName) {
			await handleGetAllDocuments({
				setLoading,
				dispatch,
				token,
				idAprovacao,
				countPage,
				idDriveName,
				setDocuments,
				setDataTable,
				setPagesData,
			});
		}
	};

	// função levar usuário pra poxima paganina ou para a anterior
	const handleOnclickPageNextOrPreview = useCallback(
		(netxOrPreview: string, pageNumber: any) => {
			handleOnClickPagination({
				netxOrPreview,
				pageNumber,
				setCountPage,
				countPage,
			});
		},
		[countPage]
	);

	useEffect(() => {
		onHandleGetAllDocuments();
	}, [countPage, idAprovacao]);

	return (
		<>
			{loading ? (
				<Loading color={theme.colors.blue_100} size={34} />
			) : (
				<>
					{isModal && (
						<ModalAprovation
							isModalOpen={isModal}
							isLoading={loadingAprovation}
							onOpenAndClosedClick={() => {
								setIsModal(!isModal);
							}}
							onAprovationDocumentAndCoil={() => {
								handleAprovarionDocumentOrCoil();
							}}
						/>
					)}
					{isModalReproach && (
						<ModalCancelAprovation
							isModalOpen={isModalReproach}
							onOpenAndClosedClick={() => {
								setIsModalReproach(!isModalReproach);
							}}
							onAprovationDocumentAndCoil={() => {
								handleAprovarionDocumentOrCoil();
							}}
						/>
					)}
					<ContainerMain>
						<WrapperTitle>
							<Text
								width={"100%"}
								marginTop={18}
								text={handleReturnText({
									document: documents?.aprovacao,
									numberDocument: Number(idAprovacao),
								})}
								align="left"
								letterHeight={24}
								letterSpacing={0.5}
								color={theme.colors.black_200}
								size={24}
								weight="600"
								marginBottom={16}
							/>
						</WrapperTitle>
						<>
							{documents.data.length ? (
								<WrapperImage>
									{documents.data.map((doc: any, index) => (
										<ImageCustom
											key={String(index)}
											type={documents.aprovacao.status}
											username={doc.user}
											approvalDate={doc?.formatted_updated_at}
											imageUri={doc?.file_url}
											onClickApproved={() => {
												setImageID(doc.id);
												setIsModal(!isModal);
											}}
											onClickDisapproved={() => {
												setIsModalReproach(!isModalReproach);
											}}
										/>
									))}
								</WrapperImage>
							) : (
								<WrapperImageNotFoundData>
									<ImageNotFoundData
										src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
										alt="not-found"
									/>
									<Text
										width={"100%"}
										marginTop={18}
										text={`Nenhuma foto de bobina ou comprovante encontrada...`}
										align="center"
										letterHeight={18}
										letterSpacing={0.5}
										color={theme.colors.black_200}
										size={24}
										weight="600"
									/>
								</WrapperImageNotFoundData>
							)}
						</>

						{/** COMPONENTE DE TABELA */}
						<Table
							data={dataTable}
							pages={pagesData}
							onClickNext={(pageCount: any) => {
								handleOnclickPageNextOrPreview("next", Number(pageCount));
							}}
							onClickPreview={(pageCount: any) => {
								handleOnclickPageNextOrPreview("preview", Number(pageCount));
							}}
						/>
					</ContainerMain>
				</>
			)}
		</>
	);
};

/**
 * EXPORTS
 */
export { Aprovation };
