/**
 * IMPORTS
 */
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";

// redux
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";

// components
import { Text } from "../../components/text";
import { Loading } from "../../components/loading";
import { ImageCustom } from "../../components/image";
import { PaginationFooter } from "../../components/pagination-footer";
import { ModalAprovation } from "../../components/modal-approval";
import { ModalFailApproval } from "../../components/modal-fail-approval";

// utils
import { handleGetCurrentData } from "../../utils/get-current-data";

// functions
import { handleGetDocumentPending } from "./functions/functions-pending-approvals";
import { handleOnClickPagination } from "./functions/functions-handle-on-click-pagination";
import { handleScrollTop } from "./functions/function-scroll-top";
import { handleDocumentApprovalOne } from "./functions/functions-document-aprovation";
import { handleDocumentReproachOne } from "./functions/functions-document-reproach";

// typings
import {
	type IDataPagesProps,
	type IDocumentsPedingProps,
} from "./interface-pending-approvals";

// styles
import {
	Container,
	WrapperContent,
	WrapperTitle,
	WrapperContentNotFound,
	ImageNotFoundData,
} from "./styles";

const ApprovalPending = () => {
	const theme = useTheme();

	const dispatch = useAppDispatch();

	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const [pagesData, setPagesData] = useState<IDataPagesProps[]>([]);

	const [isLoading, setIsLoading] = useState(false);
	const [loadingAprovationOrReproach, setLoadingAprovationOrReproach] =
		useState(false);

	const [isOpenModalAprovation, setIsOpenModalAprotion] = useState(false);
	const [isModalReproach, setIsModalReproach] = useState(false);

	const [idImage, setImageID] = useState<number | any>(0);
	const [messageApproval, setMessageApproval] = useState("");

	const [countPage, setCountPage] = useState(1);

	const [lastpage, setLastPage] = useState(0);

	const [dataPendingDocuments, setDataPeddingDocuments] = useState<
		IDocumentsPedingProps[]
	>([]);

	const handlePendingApprovalSeeking = async () => {
		handleGetDocumentPending({
			setIsLoading,
			dispatch,
			token,
			status: "novo",
			countPage,
			setDataPeddingDocuments,
			setLastPage,
			setPagesData,
		});
	};

	const btn = document.querySelector("#back-to-top");

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
		handlePendingApprovalSeeking();
	}, [countPage]);

	return (
		<div id="back-to-top">
			{isLoading ? (
				<Loading />
			) : (
				<>
					<ModalAprovation
						isLoading={loadingAprovationOrReproach}
						isModalOpen={isOpenModalAprovation}
						onAprovationDocumentAndCoil={() => {
							handleDocumentApprovalOne({
								token,
								idImage,
								dispatch,
								setLoadingAprovationOrReproach,
								setImageID,
								setIsLoading,
								setIsOpenModalAprotion,
								handleGetCurrentData,
								handlePendingApprovalSeeking,
							});
						}}
						onOpenAndClosedClick={() => {
							setIsOpenModalAprotion(false);
						}}
					/>

					<ModalFailApproval
						isModalOpen={isModalReproach}
						isLoading={loadingAprovationOrReproach}
						onOpenAndClosedClick={() => {
							setIsModalReproach(!isModalReproach);
						}}
						// reprovar documento
						onAprovationDocumentAndCoil={() => {
							handleDocumentReproachOne({
								token,
								dispatch,
								idImage,
								messageApproval,
								setLoadingAprovationOrReproach,
								setIsModalReproach,
								setImageID,
								setIsLoading,
								handleGetCurrentData,
								handlePendingApprovalSeeking,
							});
						}}
						// selecionar opção
						onSelectOption={text => {
							setMessageApproval(text);
							return text;
						}}
						// caso usuário não selecione uma das opção acima
						onChangeTextArea={text => {
							setMessageApproval(text.target.value);
							return "";
						}}
					/>
					<Container>
						<WrapperTitle>
							<Text
								marginTop={18}
								text="Documentos Pedentes:"
								align="left"
								letterHeight={24}
								letterSpacing={0.5}
								color={theme.colors.black_200}
								size={24}
								weight="600"
								marginBottom={16}
							/>
						</WrapperTitle>
						<WrapperContent>
							{dataPendingDocuments.length > 0 ? (
								dataPendingDocuments.map((documents: IDocumentsPedingProps) => (
									<ImageCustom
										key={String(documents.id)}
										type={documents.status}
										username={documents?.user}
										approvalDate={documents?.formatted_updated_at}
										imageUri={documents?.file_url}
										onClickApproved={() => {
											setImageID(documents.id);
											setIsOpenModalAprotion(true);
										}}
										onClickDisapproved={() => {
											setImageID(documents.id);
											setIsModalReproach(true);
										}}
									/>
								))
							) : (
								<WrapperContentNotFound>
									<ImageNotFoundData
										src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
										alt="not-found"
									/>
									<Text
										marginTop={18}
										text="Nenhum documento encontrado..."
										align="center"
										letterHeight={24}
										letterSpacing={0.5}
										color={theme.colors.black_100}
										size={22}
										weight="600"
									/>
								</WrapperContentNotFound>
							)}
						</WrapperContent>

						<PaginationFooter
							pageData={pagesData}
							firstPage={countPage}
							lastpage={lastpage}
							isLoadingPagination={isLoading}
							onClickNext={(paramsPage: number) => {
								handleOnclickPageNextOrPreview("next", Number(paramsPage));
								handleScrollTop(btn);
							}}
							onClickPreview={(paramsPage: number) => {
								handleOnclickPageNextOrPreview("preview", Number(paramsPage));
								handleScrollTop(btn);
							}}
						/>
					</Container>
				</>
			)}
		</div>
	);
};

/**
 * EXPORTS
 */
export { ApprovalPending };
