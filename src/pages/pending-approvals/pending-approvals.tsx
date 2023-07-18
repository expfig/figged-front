/**
 * IMPORTS
 */

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

// functions
import { handleGetDocumentPending } from "./functions/functions-pending-approvals";
import { handleOnClickPagination } from "./functions/functions-handle-on-click-pagination";
import { handleScrollTop } from "./functions/function-scroll-top";

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
	const [countPage, setCountPage] = useState(1);

	const [lastpage, setLastPage] = useState(0);

	const [dataPendingDocuments, setDataPeddingDocuments] = useState<
		IDocumentsPedingProps[]
	>([]);

	const handleGetPendingListing = async () => {
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
		handleGetPendingListing();
	}, [countPage]);

	return (
		<div id="back-to-top">
			{isLoading ? (
				<Loading />
			) : (
				<>
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
										onClickApproved={() => {}}
										onClickDisapproved={() => {}}
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
