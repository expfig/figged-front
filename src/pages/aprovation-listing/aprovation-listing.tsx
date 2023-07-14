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
import { handleGetDocumentApprovel } from "./functions/functions-approvation-listing";
import { handleScrollTop } from "./functions/function-scroll-top";

// typings
import {
	type IDataPagesProps,
	type IDocumentsApprovedProps,
} from "./interface";

// styles
import {
	Container,
	ImageNotFoundData,
	WrapperContent,
	WrapperContentNotFound,
	WrapperTitle,
} from "./styles";
import "./aprovation-listing.css";

const AprovationListing = () => {
	const theme = useTheme();
	const dispatch = useAppDispatch();

	const token = "ec4c56361ddbb8c058be23575e8bb7cff585c2c9";

	const [isLoading, setIsLoading] = useState(false);
	const [pageCount, setPageCount] = useState(1);
	const [lastpage, setLastpage] = useState(0);

	const [dataApprovalDocuments, setDataApprovalDocuments] = useState<
		IDocumentsApprovedProps[]
	>([]);

	const [pagesData, setDataPages] = useState<IDataPagesProps[]>([]);

	const handleApprovationListing = async () => {
		handleGetDocumentApprovel({
			setIsLoading,
			dispatch,
			token,
			page: pageCount,
			status: "aprovado",
			setDataPages,
			setLastpage,
			setDataApprovalDocuments,
		});
	};

	const btn = document.querySelector("#back-to-top");

	// função levar usuário pra poxima paganina ou para a anterior
	const handleOnclickPageNextOrPreview = useCallback(
		(netxOrPreview: string, pageNumber: number) => {
			if (netxOrPreview === "next") {
				if (pageNumber) {
					setPageCount(pageNumber);
				} else {
					setPageCount(pageCount + 1);
				}
			} else {
				if (pageNumber) {
					setPageCount(pageNumber);
				} else {
					setPageCount(pageCount - 1);
				}
			}
		},
		[pageCount]
	);

	useEffect(() => {
		handleApprovationListing();
	}, [pageCount]);

	return (
		<div id="back-to-top">
			{isLoading ? (
				<Loading size={45} />
			) : (
				<Container>
					<WrapperTitle>
						<Text
							marginTop={18}
							text="Documentos Aprovados:"
							align="left"
							letterHeight={24}
							letterSpacing={0.5}
							color={theme.colors.black_100}
							size={24}
							weight="600"
							marginBottom={16}
						/>
					</WrapperTitle>
					<WrapperContent>
						{dataApprovalDocuments.length > 0 ? (
							dataApprovalDocuments.map(
								(documents: IDocumentsApprovedProps) => (
									<ImageCustom
										key={String(documents.id)}
										type={documents.status}
										username={documents?.user}
										approvalDate={documents?.formatted_updated_at}
										imageUri={documents?.file_url}
										onClickApproved={() => {}}
										onClickDisapproved={() => {}}
									/>
								)
							)
						) : (
							<WrapperContentNotFound>
								<ImageNotFoundData
									src="https://img.myloview.com.br/posters/icone-da-pagina-do-arquivo-do-documento-do-prazo-do-horario-400-112384520.jpg"
									alt="not-found"
								/>
								<Text
									marginTop={18}
									text="Nenhum registro encontrado..."
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
				</Container>
			)}

			<PaginationFooter
				pageData={pagesData}
				firstPage={pageCount}
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
		</div>
	);
};

/**
 * EXPORTS
 */
export { AprovationListing };
